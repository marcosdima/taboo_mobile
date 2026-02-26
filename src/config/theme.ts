import { createLightDarkProvider } from 'alambre';
import { Storage } from '@utils';

const same = {
  text: {
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    subTitle: {
      fontSize: 18,
      opacity: 0.8,
      marginBottom: 6,
    },
  },
};

const light = {
  color: 'black',
  backgroundColor: 'white',
  toast: {
    backgroundColor: '#D9CFC7',
    text: 'black',
  },
  ...same,
};

const dark = {
  color: 'white',
  backgroundColor: 'black',
  toast: {
    backgroundColor: '#F9F8F6',
    text: 'black',
  },
  ...same,
};

export const {
  LightDarkProvider,
  useLightDark,
} = createLightDarkProvider(light, dark, Storage);
