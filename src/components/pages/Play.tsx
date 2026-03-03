import { Title, View } from '@base';
import { useConfig, useLang, useLightDark } from '@config';
import { useNavigator, useToast } from 'alambre';
import { BorderButton } from 'node_modules/alambre/dist/components/base/input/buttons';
import { StyleSheet } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { createGame, getCurrentPlay } from '../../servidor/servidor';
import Game from './game/Game';

export default () => {
  const {
    theme: {
      color,
      text: {
        subTitle,
      },
    },
  } = useLightDark();
  const { lang } = useLang();
  const { config, saveField } = useConfig();
  const { navigate } = useNavigator();
  const { setMessage } = useToast();
  const [checkingGame, setCheckingGame] = useState(true);

  const validateCurrentGame = useCallback(async () => {
    const userId = Number(config.user_id);

    if (!config.token || !userId) {
      if (config.curr_game_id) {
        saveField('curr_game_id', '');
      }
      setCheckingGame(false);
      return;
    }

    try {
      const currentPlay = await getCurrentPlay(config.token, userId);
      const currentGameId = currentPlay ? String(currentPlay.game_id) : '';

      if (currentGameId !== config.curr_game_id) {
        saveField('curr_game_id', currentGameId);
      }
    } catch (error) {
      if (config.curr_game_id) {
        saveField('curr_game_id', '');
      }
      setMessage({
        content: error instanceof Error ? error.message : lang.pages.play.error,
        type: 'error',
        duration: 4000,
      });
    } finally {
      setCheckingGame(false);
    }
  }, [config.curr_game_id, config.token, config.user_id, lang.pages.play.error, saveField, setMessage]);

  useEffect(() => {
    setCheckingGame(true);
    validateCurrentGame();
  }, [validateCurrentGame]);

  const onCreateServer = async () => {
    if (!config.token) {
      setMessage({
        content: lang.pages.play.missingToken,
        type: 'error',
        duration: 4000,
      });
      return;
    }

    try {
      const game = await createGame(config.token);
      saveField('curr_game_id', String(game.id));
      setMessage({
        content: lang.pages.play.created,
        type: 'info',
        duration: 3000,
      });
    } catch (error) {
      setMessage({
        content: error instanceof Error ? error.message : lang.pages.play.error,
        type: 'error',
        duration: 5000,
      });
    }
  };

  const onJoinGame = () => {
    navigate('enterGame');
  };

  const textStyle = {
    color,
    borderColor: color,
    textAlign: 'center' as const,
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    ...subTitle,
  };

  return (
    <View style={styles.container}>
      {checkingGame ? (
        <Title text={lang.pages.play.checkingGame} />
      ) : config.curr_game_id ? (
        <Game />
      ) : (
        <>
          <Title text={lang.pages.play.title} />
          <BorderButton
            label={lang.pages.play.createServer}
            style={{ width: '70%' }}
            textStyle={textStyle}
            onPressOut={onCreateServer}
          />
          <BorderButton
            label={lang.pages.play.joinGame}
            style={{ width: '70%' }}
            textStyle={textStyle}
            onPressOut={onJoinGame}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggle: {
    height: 100,
    aspectRatio: 3,
  },
});
