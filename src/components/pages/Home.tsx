import { Title, View } from '@base';
import { StyleSheet } from 'react-native';
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
  const { setMessage } = useToast();
  const { navigate } = useNavigator();
  const { lang } = useLang();

  const onPressOut = () => {
    navigate('configuration');
    setMessage({
      content: 'No lo hagas!',
      type: 'error',
      duration: 7000,
    });
  };

  return (
    <View style={styles.contenedor}>
      <Title text={lang.pages.home.title} />
      <BorderButton
        label='Configuration'
        style={{ width: '70%' }}
        textStyle={{
          color,
          borderColor: color,
          textAlign: 'center',
          borderWidth: 2,
          borderRadius: 15,
          padding: 15,
          ...subTitle,
        }}
        onPressOut={onPressOut}
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
