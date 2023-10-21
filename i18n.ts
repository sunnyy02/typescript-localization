import i18next from 'i18next';
import  {esCommon} from './locales/es/common';
import { common } from './locales/en/common';

export const defaultNS = 'common';

i18next.init({
  lng: 'es', // Default language
  fallbackLng: 'es', // Fallback language
  debug: true, // Enable debug mode (optional)
  resources: {
    en: {
      common: common,
    },
    es: {
      common: esCommon,
    },
  },
});

export default i18next;
