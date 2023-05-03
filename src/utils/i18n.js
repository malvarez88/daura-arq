import i18next from "i18next";

import store from "../store/store";

import global_es from "../languages/es/global.json";
import global_en from "../languages/en/global.json";
import global_ca from "../languages/ca/global.json";

const language = store.getState().language;
console.log("🚀 ~ file: i18n.js:10 ~ language:", language)


i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: language, 
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
