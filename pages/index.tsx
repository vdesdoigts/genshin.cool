import React from 'react'
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import AppMenu from '../components/AppMenu'
import CharactersTalents from '../components/CharactersTalents'
import DaySelect from '../components/DaySelect'
import Header from '../components/Header'
import Roster from '../components/Roster'
import WeaponsAscensions from '../components/WeaponsAscensions'

const Dash = () => {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
    >
      <Box
        position="fixed"
        top={0}
        left={0}
        flexShrink={0}
        width="256px"
        height="100vh"
        padding="140px 0 12px"
        background="#ffffff"
        borderRight="1px solid #E4E4E4"
        transform={{ base: 'translateX(-100%)', xxl: 'none' }}
      >
        <AppMenu />
      </Box>
      <Box
        flexGrow={1}
        paddingLeft={{ base: 0, xxl: '256px' }}
        transition="all .25s"
      >
        <Box maxW={{ base: '600px', md: '1000px', xl: '1400px' }} margin="0 auto">
          <Flex direction={{ base: 'column', xl: 'row' }}>
            <Box
              flex={{ base: '0 0 100%', xl: '0 0 calc(100% - 480px)' }}
              maxW={{ base: '100%', xl: 'calc(100% - 480px)' }}
              pt="48px"
              px={{ base: '20px', md: '64px', xl: '32px', xxl: '64px' }}
            >
              <Heading pl={{ base: '16px', md: 0 }} fontSize={{ base: '16px', md: '24px' }} lineHeight="1.33333" fontWeight="500">Hi Genshin Player,</Heading>
              <Heading pl={{ base: '16px', md: 0 }} fontSize={{ base: '32px', md: '48px' }} lineHeight="1.5" fontWeight="600" letterSpacing="-1px">Welcome back 👋</Heading>

              <SimpleGrid columns={1} spacing="32px" pt={{ base: '22px', md: '44px' }}>
                <DaySelect />
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="32px">
                  <Box>
                    <CharactersTalents />
                  </Box>
                  <Box>
                    <WeaponsAscensions />
                  </Box>
                </SimpleGrid>
              </SimpleGrid>
            </Box>
            <Box
              borderLeft={{ base: 'none', xl: '1px solid #E4E4E4' }}
              flexShrink={0}
              width={{ base: '100%', xl: '480px' }}
              minH={{ base: 'auto', xl: '100vh' }}
              pt="48px"
              px={{ base: '20px', md: '64px', xl: '32px', xxl: '64px' }}
            >
              <Roster />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default Dash
