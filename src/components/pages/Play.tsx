import { Title, View } from '@base';
import { useLang, useLightDark } from '@config';
import { useNavigator } from 'alambre';
import { BorderButton } from 'node_modules/alambre/dist/components/base/input/buttons';
import { StyleSheet } from 'react-native';

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

  const onCreateServer = () => {
    // Implementar lógica de crear servidor
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
