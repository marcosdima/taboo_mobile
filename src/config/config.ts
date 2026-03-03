import { createConfigProvider } from 'alambre';
import { Storage } from '@utils';

const baseConfig = {
  alias: '',
  token: '',
  user_id: '',
  curr_game_id: '',
};

export const {
  ConfigProvider,
  useConfig,
} = createConfigProvider(baseConfig, Storage);
