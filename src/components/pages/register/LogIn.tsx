import { Title, View } from '@base';
import { useConfig, useLang, useLightDark } from '@config';
import { useNavigator, useToast } from 'alambre';
import { BorderButton } from 'node_modules/alambre/dist/components/base/input/buttons';
import { StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import { login } from '../../../servidor/servidor';

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
  const { config, saveField } = useConfig();
  const [localAlias, setLocalAlias] = useState(config.alias);
  const [password, setPassword] = useState('');

  const handleAliasChange = (text: string) => {
    setLocalAlias(text);
    saveField('alias', text);
  };

  const onLogIn = async () => {
    if (!localAlias.trim() || !password.trim()) {
      setMessage({
        content: lang.pages.login.invalidData,
        type: 'error',
        duration: 4000,
      });
      return;
    }

    try {
      const response = await login({ alias: localAlias.trim(), password });
      saveField('token', response.token);
      setMessage({
        content: lang.pages.login.success,
        type: 'info',
        duration: 3000,
      });
      navigate('home');
    } catch (error) {
      setMessage({
        content: error instanceof Error ? error.message : lang.pages.login.error,
        type: 'error',
        duration: 5000,
      });
    }
  };

  const onGoSignIn = () => {
    navigate('signIn');
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
      <Title text={lang.pages.login.title} />
      <TextInput
        style={inputStyle}
        value={localAlias}
        onChangeText={handleAliasChange}
        placeholder={lang.pages.login.aliasPlaceholder}
        placeholderTextColor={color + '80'}
        autoCapitalize="none"
      />
      <TextInput
        style={inputStyle}
        value={password}
        onChangeText={setPassword}
        placeholder={lang.pages.login.passwordPlaceholder}
        placeholderTextColor={color + '80'}
        secureTextEntry
      />
      <BorderButton
        label={lang.pages.login.action}
        style={{ width: '70%' }}
        textStyle={textStyle}
        onPressOut={onLogIn}
      />
      <BorderButton
        label={lang.pages.login.signInAction}
        style={{ width: '70%' }}
        textStyle={textStyle}
        onPressOut={onGoSignIn}
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
