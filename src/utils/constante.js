import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from "./locales/en.json"
import frTranslation from "./locales/fr.json"

i18n
.use(initReactI18next)// bind react-i18next to i18next intance
.init({
  ressources:{
    fr: { translation: frTranslation },
    en: { translation: enTranslation },
},
lng: 'fr',//Set default language
fallbackLng: 'fr',//Fallback value in case translation is missing
interpolation: {
    escapeValue: false,
},
});

export default i18n;