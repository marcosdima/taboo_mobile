import { Title, View } from '@base';
import { useConfig, useLang, useLightDark } from '@config';
import { useNavigator, useToast } from 'alambre';
import { BorderButton } from 'node_modules/alambre/dist/components/base/input/buttons';
import { StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import { signIn } from '../../../servidor/servidor';

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
  const { setMessage } = useToast();
  const { navigate } = useNavigator();
  const { saveField } = useConfig();
  const [alias, setAlias] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = async () => {
    if (!alias.trim() || !password.trim()) {
      setMessage({
        content: lang.pages.signIn.invalidData,
        type: 'error',
        duration: 4000,
      });
      return;
    }

    try {
      await signIn({ alias: alias.trim(), password });
      saveField('alias', alias.trim());
      setMessage({
        content: lang.pages.signIn.success,
        type: 'info',
        duration: 3000,
      });
      navigate('logIn');
    } catch (error) {
      setMessage({
        content: error instanceof Error ? error.message : lang.pages.signIn.error,
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

  const inputStyle = {
    ...textStyle,
    width: '70%' as const,
    marginBottom: 20,
  };

  return (
    <View style={styles.container}>
      <Title text={lang.pages.signIn.title} />
      <TextInput
        style={inputStyle}
        value={alias}
        onChangeText={setAlias}
        placeholder={lang.pages.signIn.aliasPlaceholder}
        placeholderTextColor={color + '80'}
        autoCapitalize="none"
      />
      <TextInput
        style={inputStyle}
        value={password}
        onChangeText={setPassword}
        placeholder={lang.pages.signIn.passwordPlaceholder}
        placeholderTextColor={color + '80'}
        secureTextEntry
      />
      <BorderButton
        label={lang.pages.signIn.action}
        style={{ width: '70%' }}
        textStyle={textStyle}
        onPressOut={onSignIn}
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
});
