import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './en.json'
import fr from './fr.json'

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
}

const i18n = (lang) => i18next
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init({
    resources,
    lng: lang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ['path']
    }
  })

  export default i18n
