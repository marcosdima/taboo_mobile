import { Title, View } from '@base';
import { StyleSheet, BackHandler } from 'react-native';
import { useNavigator, useToast } from 'alambre';
import { useLang, useLightDark } from '@config';
import { BorderButton } from 'node_modules/alambre/dist/components/base/input/buttons';

export default () => {
  const {
    theme: {
      color,
      text: {
        subTitle,
      },
    },
  } = useLightDark();
  const { navigate } = useNavigator();
  const { lang } = useLang();

  const onConfiguration = () => {
    navigate('configuration');
  };

  const onPlay = () => {
    navigate('play');
  };

  const onExit = () => {
    BackHandler.exitApp();
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
    <View style={styles.contenedor}>
      <Title text={lang.pages.home.title} />
      <BorderButton
        label={lang.menu.play}
        style={{ width: '70%' }}
        textStyle={textStyle}
        onPressOut={onPlay}
      />
      <BorderButton
        label={lang.menu.configuration}
        style={{ width: '70%' }}
        textStyle={textStyle}
        onPressOut={onConfiguration}
      />
      <BorderButton
        label={lang.menu.exit}
        style={{ width: '70%' }}
        textStyle={textStyle}
        onPressOut={onExit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonPart: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    height: 15,
    aspectRatio: 3,
  },
  buttonLabel: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
