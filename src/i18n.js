import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_es from './languages/es/global.json';
import global_en from './languages/en/global.json';
import global_ca from './languages/ca/global.json';

i18next
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'es',
    resources: {
      es: {
        global: global_es,
      },
      en: {
        global: global_en,
      },
      ca: {
        global: global_ca,
      },
    },
  });

export default i18next;
