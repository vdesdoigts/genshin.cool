import * as React from 'react'
import { Provider } from 'react-redux'
import { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import 'typeface-poppins'
import theme from '../theme'
import '../styles/globals.css'
import { store } from '../redux/store'

const persistor = getPersistor()

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Genshin Impact - Farming Guide</title>
        <meta
          name="description"
          content="Find out the best farming methods and schedule optimization in this guide for Genshin Impact."
        />
        <meta
          name="keywords"
          content="Amber; Anemo; Dendro; Diluc; Electro; Elemental Archons; elemental combat system; genshi; genshi game; genshi impact; genshin; genshin game; genshin impact; genshin impact farming guide; genshin impact game; genshin impact farming; genshin impact wiki; geshin; geshin game; geshin impact; Hyrdo; Jean; Kaeya; Lisa; Liyue Harbor; Paimon; Protagonist; Pyro; Razor; seven elements; Teyvat; Venti; JPRG; mobile game"
        />

        <meta
          property="og:title"
          content="Genshin Impact - Farming Guide"
        />
        <meta property="og:description" content="Find out the best farming methods and schedule optimization in this guide for Genshin Impact." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.genshin.cool" />
        <meta property="og:locale" content="eng" />
        <meta property="og:site_name" content="Genshin Impact - Farming Guide" />
        {/* <meta property="og:image" content="https://www.genshin.cool/assets/images/logo-1200x630.png" /> */}
        {/* <meta property="og:image:url" content="https://www.genshin.cool/assets/images/logo-1200x630.png" /> */}
        <meta property="og:image:url:width" content="1200" />
        <meta property="og:image:url:height" content="630" />

        <meta name="twitter:title" content="Genshin Impact - Farming Guide" />
        <meta name="twitter:site" content="@vdesdoigts" />
        <meta name="twitter:creator" content="@vdesdoigts" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:image" content="https://www.genshin.cool/assets/images/logo-600x600.png" /> */}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q274VX13LE"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q274VX13LE');
            `,
          }}
        />
      </Head>
      
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  )
}

export default App
