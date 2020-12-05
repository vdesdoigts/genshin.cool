import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import CharactersAscension from '../components/CharactersAscensions'
import CharactersTalents from '../components/CharactersTalents'
import DaySelect from '../components/DaySelect'
import Roster from '../components/Roster'
import WeaponsAscensions from '../components/WeaponsAscensions'
import Armory from '../components/Armory'

const Dash = () => {
  const { t } = useTranslation()

  return (
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
            pb="32px"
            px={{ base: '20px', md: '64px', xl: '32px', xxl: '64px' }}
          >
            <Heading as="h3" pl={{ base: '16px', md: 0 }} fontSize={{ base: '16px', md: '24px' }} lineHeight="1.33333" fontWeight="500">{t('site.header_label')}</Heading>
            <Heading as="h4" pl={{ base: '16px', md: 0 }} fontSize={{ base: '32px', md: '48px' }} lineHeight="1.5" fontWeight="600" letterSpacing="-1px">{t('site.header_title')}</Heading>

            <SimpleGrid columns={1} spacing="32px" pt={{ base: '22px', md: '44px' }}>
              <DaySelect />
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing="24px">
                <Box>
                  <CharactersTalents />
                </Box>
                <Box>
                  <WeaponsAscensions />
                </Box>
              </SimpleGrid>
            </SimpleGrid>
            <SimpleGrid pt={{ base: '32px' }}>
              <CharactersAscension />
            </SimpleGrid>
          </Box>
          <Box
            borderLeft={{ base: 'none', xl: '1px solid #E4E4E4' }}
            flexShrink={0}
            width={{ base: '100%', xl: '480px' }}
            minH={{ base: 'auto', xl: '100vh' }}
            pt="48px"
            pb="32px"
            px={{ base: '20px', md: '64px', xl: '32px', xxl: '64px' }}
          >
            <SimpleGrid columns={1} spacing="32px">
              <Roster />
              <Armory />
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Dash
