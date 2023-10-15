import { defaultNS } from '../i18n';
import * as enCommon from '../locales/en/common.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      common: typeof enCommon
    }
  }
}
