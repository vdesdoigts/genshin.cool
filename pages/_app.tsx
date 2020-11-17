import * as React from 'react'
import { Provider } from 'react-redux'
import { Box, ChakraProvider } from '@chakra-ui/react'
import 'typeface-poppins'
import theme from '../theme'
import '../styles/globals.css'
import { store } from '../redux/store'

function App({ Component, pageProps }) {
  return (
    <Box background="#f9f9f9" minHeight="100vh">
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </Box>
  )
}

export default App
