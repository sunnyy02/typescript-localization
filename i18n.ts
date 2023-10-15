import i18next from 'i18next';
import * as enCommon from './locales/en/common.json';
import * as esCommon from './locales/es/common.json';

export const defaultNS = 'common';

i18next.init({
  lng: 'es', // Default language
  fallbackLng: 'es', // Fallback language
  debug: true, // Enable debug mode (optional)
  resources: {
    en: {
      common: enCommon,
    },
    es: {
      common: esCommon,
    },
  },
});

export default i18next;
