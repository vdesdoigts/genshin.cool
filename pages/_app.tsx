import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { I18nextProvider, useTranslation } from 'react-i18next'
import { Provider } from 'react-redux'
import { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Box, ChakraProvider, Flex, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import 'typeface-poppins'
import i18n from 'i18next'
import theme from '../theme'
import { store } from '../redux/store'

import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '../i18n/en.json'
import fr from '../i18n/fr.json'

import Layout from './_layout'

const persistor = getPersistor()

function App({ Component, pageProps }) {
  const router = useRouter()

  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources: {
        en: {
          translation: en,
        },
        fr: {
          translation: fr,
        },
      },
      lng: router.locale,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
      detection: {
        order: ['path']
      }
    })

  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider resetCSS theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {() => (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </I18nextProvider>
  )
}

export default App
