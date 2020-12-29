import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ProfileSelectors } from '../redux/selectors'
import { IRoster } from '../types'
import AppHeading from '../components/AppHeading'
import ScheduleBox from '../components/ScheduleBox'

const RosterList = dynamic(
  () => import('../components/RosterList'),
  { ssr: false }
)

const CharactersTalents = dynamic(
  () => import('../components/CharactersTalents'),
  { ssr: false }
)

const Dashboard = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const currentRoster: IRoster = useSelector(ProfileSelectors.getCurrentRoster)

  return (
    <>
      <Head>
        <title>{t('seo.talents')} | Genshin Impact | {router.locale.toUpperCase()}</title>
        <meta property="og:title" content={`${t('seo.talents')} | Genshin Impact | ${router.locale.toUpperCase()}`} />
        <meta name="twitter:title" content={`${t('seo.talents')} | Genshin Impact | ${router.locale.toUpperCase()}`} />

        <meta name="description" content={t('seo.talents_description')} />
        <meta property="og:description" content={t('seo.talents_description')} />
      </Head>
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
                subtitle={t('site.header.talents_subtitle')}
                title={t('site.header.talents_title')}
              />
              <SimpleGrid columns={1} spacing="32px" pt={{ base: '22px', md: '44px' }}>
                <ScheduleBox />
                <CharactersTalents currentRoster={currentRoster} />
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
    </>
  )
}

export default Dashboard
