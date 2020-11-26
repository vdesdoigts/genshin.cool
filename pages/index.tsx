import React from 'react'
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
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
        padding="140px 0 72px"
        background="#ffffff"
        borderRight="1px solid #E4E4E4"
      >
        <AppMenu />
      </Box>
      <Box
        flexGrow={1}
        paddingLeft="256px"
        transition="all .25s"
      >
        <Box maxW="1400px" margin="0 auto">
          <Flex>
            <Box
              flex="0 0 calc(100% - 480px)"
              maxW="calc(100% - 480px)"
              pt="48px"
              px="64px"
            >
              <Heading fontSize="24px" lineHeight="1.33333" fontWeight="500">Hi Genshin Player,</Heading>
              <Heading fontSize="48px" lineHeight="1.5" fontWeight="600" letterSpacing="-1px">Welcome back 👋</Heading>

              <SimpleGrid columns={1} spacing="32px" pt="44px">
                <DaySelect />
                <SimpleGrid columns={2} spacing="32px">
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
              borderLeft="1px solid #E4E4E4"
              flexShrink={0}
              width="480px"
              pt="48px"
              px="64px"
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
