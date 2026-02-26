import { createConfigProvider } from 'alambre';
import { Storage } from '@utils';

const baseConfig = {
  alias: '',
};

export const {
  ConfigProvider,
  useConfig,
} = createConfigProvider(baseConfig, Storage);
