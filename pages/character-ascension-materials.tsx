import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ProfileSelectors } from '../redux/selectors'
import { IRoster } from '../types'
import AppHeading from '../components2/AppHeading'
import CharactersAscensions from '../components2/CharactersAscensions'
import CharactersTalents from '../components2/CharactersTalents'
import RosterList from '../components2/RosterList'
import ScheduleBox from '../components2/ScheduleBox'

const Dashboard = () => {
  const { t } = useTranslation()
  const currentRoster: IRoster = useSelector(ProfileSelectors.getCurrentRoster)

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
            <AppHeading
              subtitle={t('site.header_characters_ascensions_subtitle')}
              title={t('site.header_characters_ascensions_title')}
            />
            <SimpleGrid spacing="32px" pt={{ base: '32px' }}>
              <CharactersAscensions currentRoster={currentRoster} />
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
              <RosterList currentRoster={currentRoster} />
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Dashboard
