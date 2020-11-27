import React, { useState } from 'react'
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import AppMenu from '../components/AppMenu'
import CharactersTalents from '../components/CharactersTalents'
import DaySelect from '../components/DaySelect'
import Header from '../components/Header'
import Roster from '../components/Roster'
import WeaponsAscensions from '../components/WeaponsAscensions'
import EditProfile from '../components/EditProfile'

const Dash = () => {
  const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose, onToggle: onMenuToggle } = useDisclosure()
  const { isOpen: isEditProfileModalOpen, onOpen: onEditProfileModalOpen, onClose: onEditProfileModalClose } = useDisclosure()
  const [profileBeingEdited, setProfileBeingEdited] = useState<number | null>()

  const handleEditProfileModalOpen = (index: number) => {
    setProfileBeingEdited(index)
    onEditProfileModalOpen()
  }

  const handleEditProfileModalClose = () => {
    onEditProfileModalClose()
    setProfileBeingEdited(null)
  }

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
          zIndex={1400}
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
      <EditProfile
        profileBeingEdited={profileBeingEdited}
        isModalOpen={isEditProfileModalOpen}
        onModalClose={handleEditProfileModalClose}
      />
    </>
  )
}

export default Dash
