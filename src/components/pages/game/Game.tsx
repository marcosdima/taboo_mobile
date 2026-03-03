import { Text, Title, View } from '@base';
import { useConfig, useLang } from '@config';
import { useToast } from 'alambre';
import { useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { getCurrentPlay } from '../../../servidor/servidor';

export default () => {
  const { lang } = useLang();
  const { config, saveField } = useConfig();
  const { setMessage } = useToast();

  const validateCurrentGame = useCallback(async () => {
    const userId = Number(config.user_id);
    if (!config.token || !userId || !config.curr_game_id) {
      saveField('curr_game_id', '');
      return;
    }

    try {
      const currentPlay = await getCurrentPlay(config.token, userId);
      if (!currentPlay) {
        saveField('curr_game_id', '');
        return;
      }

      if (String(currentPlay.game_id) !== config.curr_game_id) {
        saveField('curr_game_id', String(currentPlay.game_id));
      }
    } catch (error) {
      saveField('curr_game_id', '');
      setMessage({
        content: error instanceof Error ? error.message : lang.pages.game.error,
        type: 'error',
        duration: 4000,
      });
    }
  }, [config.curr_game_id, config.token, config.user_id, lang.pages.game.error, saveField, setMessage]);

  useEffect(() => {
    validateCurrentGame();
  }, [validateCurrentGame]);

  return (
    <View style={styles.container}>
      <Title text={lang.pages.game.title} />
      <Text text={`${lang.pages.game.currentId}: ${config.curr_game_id}`} style={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
