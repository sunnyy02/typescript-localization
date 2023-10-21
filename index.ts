import i18next from './i18n';

i18next.changeLanguage('es');

const greetingMessage = i18next.t('common:greetings');
const welcomeMessage = i18next.t('common:welcome', { name: 'David' });
//const incorrectKey = i18next.t('common:welcomeNotExist');

console.log('greeting:', greetingMessage);
console.log('welcome:', welcomeMessage);
 