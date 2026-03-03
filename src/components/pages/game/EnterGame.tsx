import { Text, Title, View } from '@base';
import { useConfig, useLang, useLightDark } from '@config';
import { useNavigator, useToast } from 'alambre';
import { BorderButton } from 'node_modules/alambre/dist/components/base/input/buttons';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { addPlay, getGames, type GameResponse } from '../../../servidor/servidor';

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
  const { navigate } = useNavigator();
  const { config, saveField } = useConfig();
  const { setMessage } = useToast();
  const [games, setGames] = useState<GameResponse[]>([]);
  const [loading, setLoading] = useState(false);

  const loadGames = useCallback(async () => {
    if (!config.token) {
      setMessage({
        content: lang.pages.enterGame.missingToken,
        type: 'error',
        duration: 4000,
      });
      return;
    }

    setLoading(true);
    try {
      const result = await getGames(config.token);
      setGames(result);
    } catch (error) {
      setMessage({
        content: error instanceof Error ? error.message : lang.pages.enterGame.error,
        type: 'error',
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  }, [config.token, lang.pages.enterGame.error, lang.pages.enterGame.missingToken, setMessage]);

  useEffect(() => {
    loadGames();
  }, [loadGames]);

  const inPickGame = async (gameId: number) => {
    const userId = Number(config.user_id);
    if (!config.token || !userId) {
      setMessage({
        content: lang.pages.enterGame.missingToken,
        type: 'error',
        duration: 4000,
      });
      return;
    }

    try {
      await addPlay(config.token, userId, gameId);
      saveField('curr_game_id', String(gameId));
      setMessage({
        content: lang.pages.enterGame.joined,
        type: 'info',
        duration: 3000,
      });
      navigate('play');
    } catch (error) {
      setMessage({
        content: error instanceof Error ? error.message : lang.pages.enterGame.error,
        type: 'error',
        duration: 5000,
      });
    }
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
      <Title text={lang.pages.enterGame.title} />
      <BorderButton
        label={loading ? lang.pages.enterGame.loading : lang.pages.enterGame.refresh}
        style={{ width: '70%' }}
        textStyle={textStyle}
        onPressOut={loadGames}
      />
      {games.length === 0 ? (
        <Text style={styles.emptyText} text={lang.pages.enterGame.empty} />
      ) : (
        <View style={styles.listContainer}>
          {games.map((game) => (
            <BorderButton
              key={game.id}
              label={`${lang.pages.enterGame.game} #${game.id} · ${lang.pages.enterGame.creator}: ${game.creator}`}
              style={{ width: '90%' }}
              textStyle={textStyle}
              onPressOut={() => inPickGame(game.id)}
            />
          ))}
        </View>
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
  listContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
  },
  emptyText: {
    marginTop: 20,
    fontSize: 16,
  },
});
