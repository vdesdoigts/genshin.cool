import * as React from 'react'
import { Provider } from 'react-redux'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import 'typeface-poppins'
import theme from '../theme'
import '../styles/globals.css'
import { store } from '../redux/store'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="toy photography, toy, toys, photography, photographies, actions figures, instagram, interview"
        />

        <meta
          property="og:title"
          content="Genshin dashboard"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default App
