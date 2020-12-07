import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Provider } from 'react-redux'
import { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Box, ChakraProvider, Flex, Spinner, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import Head from 'next/head'
import 'typeface-poppins'
import '../i18n'
import theme from '../theme'
import { store } from '../redux/store'
import AppMenu from '../components/AppMenu'
import EditProfile from '../components/EditProfile'
import Header from '../components/Header'

const persistor = getPersistor()

function App({ Component, pageProps }) {
  const { i18n } = useTranslation()
  const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose, onToggle: onMenuToggle } = useDisclosure()
  const { isOpen: isEditProfileModalOpen, onOpen: onEditProfileModalOpen, onClose: onEditProfileModalClose } = useDisclosure()
  const [profileBeingEdited, setProfileBeingEdited] = useState<number | null>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isDisplayingInBrowser] = useMediaQuery('(display-mode: browser)')

  const handleEditProfileModalOpen = (index: number) => {
    setProfileBeingEdited(index)
    onEditProfileModalOpen()
  }

  const handleEditProfileModalClose = () => {
    onEditProfileModalClose()
    setProfileBeingEdited(null)
  }

  React.useEffect(() => {
    i18n.changeLanguage(store.getState().options.lang)

    if (isDisplayingInBrowser) {
      setIsLoading(false)
    }
  }, [])

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

        <script data-ad-client="ca-pub-8458876784042744" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      
      <Box
        display={isLoading ? 'flex' : 'none'}
        position="fixed"
        zIndex={2000}
        top={0}
        left={0}
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        bg="#fff"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#6C5DD3"
          size="xl"
        />
      </Box>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {() => {
            return (
              <>
                <Box
                  opacity={isMenuOpen ? 1 : 0}
                  pointerEvents={isMenuOpen ? 'initial' : 'none'}
                  position="fixed"
                  zIndex={1300}
                  left={0}
                  top={0}
                  width="100vw"
                  height="100vh"
                  background="rgba(0, 0, 0, 0.48)"
                  transition="all .25s"
                  onClick={onMenuClose}
                />
                <Header onEditProfile={handleEditProfileModalOpen} isMenuOpen={isMenuOpen} onMenuClose={onMenuClose} onMenuToggle={onMenuToggle} />
                <Flex
                  direction="column"
                  minHeight="100vh"
                >
                  <Box
                    position="fixed"
                    zIndex={isMenuOpen ? 1400 : 1000}
                    top={0}
                    left={0}
                    flexShrink={0}
                    width="256px"
                    height="100vh"
                    background="#ffffff"
                    borderRight="1px solid #E4E4E4"
                    transition="all .25s"
                    transform={{ base: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)', xxl: 'none' }}
                  >
                    <AppMenu onEditProfile={handleEditProfileModalOpen} isMenuOpen={isMenuOpen} onMenuClose={onMenuClose} onMenuToggle={onMenuToggle} />
                  </Box>
                    <Component {...pageProps} />
                </Flex>
                <EditProfile
                  profileBeingEdited={profileBeingEdited}
                  isModalOpen={isEditProfileModalOpen}
                  onModalClose={handleEditProfileModalClose}
                />
              </>
            )
          }}
        </PersistGate>
      </Provider>
    </ChakraProvider>
  )
}

export default App
