import { LangProvider, LightDarkProvider, ConfigProvider } from '@config';
import pages from './src/components/pages';
import { NavigatorProvider } from 'alambre';
import AppBody from 'src/components/AppBody';

export default function App() {
  return (
    <LangProvider>
      <LightDarkProvider>
        <ConfigProvider>
          <NavigatorProvider pages={pages}>
            <AppBody/>
          </NavigatorProvider>
        </ConfigProvider>
      </LightDarkProvider>
    </LangProvider>
  );
};
