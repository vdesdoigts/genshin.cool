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
import CharactersAscensions from '../components2/CharactersAscensions'
import Roster from '../components/Roster'

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
            <Heading as="h3" pl={{ base: '16px', md: 0 }} fontSize={{ base: '16px', md: '24px' }} lineHeight="1.33333" fontWeight="500">{t('site.header_label')}</Heading>
            <Heading as="h4" pl={{ base: '16px', md: 0 }} fontSize={{ base: '32px', md: '48px' }} lineHeight="1.5" fontWeight="600" letterSpacing="-1px">{t('site.header_title')}</Heading>

            <SimpleGrid columns={1} spacing="32px" pt={{ base: '22px', md: '44px' }}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing="24px">
                <Box>

                </Box>
                <Box>
                </Box>
              </SimpleGrid>
            </SimpleGrid>
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
              <Roster />
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Dashboard
