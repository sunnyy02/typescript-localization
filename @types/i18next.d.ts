import { defaultNS } from '../i18n';

import { common } from '../locales/en/common';
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      common: typeof common,
    }
  }
}
