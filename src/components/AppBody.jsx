import { useLightDark } from '@config';
import { StyleSheet } from 'react-native';
import { withTiming } from 'react-native-reanimated';
import {
  AnimadoView,
  NavigatorBody,
  SafeAreaView,
  useNavigator,
  ToastProvider,
} from 'alambre';

export default () => {
  const {
    theme: {
      backgroundColor,
      color,
      toast: {
        backgroundColor: toastBackgroundColor,
        text,
      },
    },
  } = useLightDark();

  return (
    <ToastProvider
      bodyProps={{
        palette: {
          backgroundColor: toastBackgroundColor,
          text,
        },
      }}
    >
      <SafeAreaView style={styles.container}>
        <AnimadoView
          animation={(v) => withTiming(v, { duration: 600 })}
          style={[
            styles.body,
            { backgroundColor },
          ]}
        >
          <NavigatorBody
            useNavigator={useNavigator}
            arrowColor={color}
            style={styles.body}
          />
        </AnimadoView>
      </SafeAreaView>
    </ToastProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    height: '100%',
  },
});
