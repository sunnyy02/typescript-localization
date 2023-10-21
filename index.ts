import i18next from './i18n';

i18next.changeLanguage('en');

const greetingMessage = i18next.t('common:greetings');
const welcomeMessage = i18next.t('common:welcome', { name: 'John' });

//const incorrectKey = i18next.t('common:welcomeNotExist');

console.log('greeting:', greetingMessage);
console.log('welcome:', welcomeMessage);
