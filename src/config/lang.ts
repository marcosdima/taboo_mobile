import { createLangProvider } from 'alambre';
import { Storage } from '@utils';

const lang = {
  en: {
    hi: 'Hi there!',
    pages: {
      home: {
        title: 'Home',
      },
      configuration: {
        title: 'Configuration',
      },
    },
  },
  es: {
    hi: 'Hola!',
    pages: {
      home: {
        title: 'Inicio',
      },
      configuration: {
        title: 'Configuración',
      },
    },
  },
};

export const {
  LangProvider,
  useLang,
} = createLangProvider(lang, Storage);
