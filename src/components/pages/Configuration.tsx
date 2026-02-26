import { View } from '@base';
import { useLightDark } from '@config';
import { ToggleLightDark } from 'alambre';
import { StyleSheet } from 'react-native';

export default () => {
  const {
    toggleTheme,
    currThemeName,
  } = useLightDark();

  return (
    <View style={styles.container}>
      <ToggleLightDark
        toggle={toggleTheme}
        setLeft={currThemeName === 'light'}
        style={styles.toggle}
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
