import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { ProfileSelectors } from '../redux/selectors'
import { IRoster } from '../types'
import CharacterAscensionRequirement from '../components/CharacterAscensionRequirement'
import CharacterTalentRequirement from '../components/CharacterTalentRequirement'
import RosterManagement from '../components/RosterManagement'
import SelectCharactersMenu from '../components/SelectCharactersMenu'

const Roster = () => {
  const { t } = useTranslation()
  const currentRoster: IRoster = useSelector(ProfileSelectors.getCurrentRoster)
  const [selectedRosterCharacterIndex, setSelectedRosterCharacterIndex] = useState<number>(0)
  const selectedCharacter = currentRoster[selectedRosterCharacterIndex]?.character
  const { isOpen: isSelectCharacterDrawerOpen, onOpen: onSelectCharacterDrawerOpen, onClose: onSelectCharacterDrawerClose } = useDisclosure()

  return (
    <>
      <Head>
        <title>Genshin Impact - Your roster</title>
        <meta
          property="og:title"
          content="Genshin Impact - Your roster"
        />
      </Head>
      <Box
        flexGrow={1}
        paddingLeft={{ base: 0, xxl: '256px' }}
        transition="all .25s"
      >
        <Box maxW={{ base: '600px', md: '1000px', xl: '1400px' }} margin="0 auto">
          <Flex direction={{ base: 'column', xl: 'row' }}>
            <Box
              flex={{ base: '0 0 100%', xl: '0 0 calc(100% - 780px)' }}
              maxW={{ base: '100%', xl: 'calc(100% - 480px)' }}
              pt="48px"
              pb="32px"
              px={{ base: '20px', md: '64px', xl: '32px', xxl: '64px' }}
            >
              <Heading as="h3" pl={{ base: '16px', md: 0 }} fontSize={{ base: '16px', md: '24px' }} lineHeight="1.33333" fontWeight="500">{t('site.header_label')}</Heading>
              <Heading as="h4" pl={{ base: '16px', md: 0 }} fontSize={{ base: '32px', md: '48px' }} lineHeight="1.5" fontWeight="600" letterSpacing="-1px">{t('site.header_characters_title')}</Heading>
            </Box>
          </Flex>
          <Box
            pl={{ base: '20px', md: '64px', xl: '32px', xxl: '64px' }}
            pr={{ base: '20px', md: '64px', xl: '32px', xxl: '32px' }}
          >
            <Grid templateColumns={{ lg: '1fr', xl: '1fr 3fr' }} gap="32px">
              <Box
                position="relative"
                zIndex={2}
                pt={{ base: '0px', xl: '30px' }}
                pb="32px"
              >
                <SimpleGrid columns={{ base: 1 }} spacing="24px">
                  <Box>
                    <Button onClick={onSelectCharacterDrawerOpen} mb={4}>
                      {t('site.manage_your_roster')}
                    </Button>
                    <RosterManagement currentRoster={currentRoster} selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedRosterCharacterIndex} />
                  </Box>
                </SimpleGrid>
              </Box>
              <Box>
                <Box position={{ base: 'relative', xl: 'sticky' }} top={{ base: 0, xl: '70px', xxl: 0 }}>
                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing="24px"
                  >
                    {selectedCharacter && <Box><CharacterAscensionRequirement selectedCharacter={selectedCharacter} /></Box>}
                    {selectedCharacter && <Box><CharacterTalentRequirement selectedCharacter={selectedCharacter} /></Box>}
                  </SimpleGrid>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Drawer
        isOpen={isSelectCharacterDrawerOpen}
        onClose={onSelectCharacterDrawerClose}
        size="md"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
              <DrawerBody>
                <SelectCharactersMenu />
              </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Roster
