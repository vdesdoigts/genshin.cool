import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerProps,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  SimpleGrid,
  Stack,
  VStack,
  useDisclosure,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RosterSelectors } from '../redux/selectors'
import useRematchDispatch from '../hooks/useRematch'
import { IArtifactItem, IArtifactType, ICharacter, IWeapon } from '../types'
import { getCharacterByName, getCharacterArtifacts, getWeaponByName } from './api'

import AppMenu from '../components/Menu'
import ArtifactsMenu from '../components/ArtifactsMenu'
import CharacterCard from '../components/CharacterCard'
import CharactersMenu from '../components/CharactersMenu'
import Header from '../components/Header'
import Schedule from '../components/Schedule'
import WeaponsMenu from '../components/WeaponsMenu'

type IDrawerName = 'artifacts' | 'characters' | 'weapons'

const Home = () => {
  const dispatch = useRematchDispatch()
  const userRoster = useSelector(RosterSelectors.getUserRoster)
  const userRosterCurrentName = useSelector(RosterSelectors.getUserRosterCurrentName)
  const userRosterCharacters = useSelector(RosterSelectors.getUserRosterCharacters)
  const userRosterCharactersWeapons = useSelector(RosterSelectors.selectWeaponCharacters)

  const [currentCharacter, setCurrentCharacter] = useState<ICharacter>()
  const [currentNavigation, setCurrentNavigation] = useState<'roster' | 'schedule'>('roster')

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [drawerOpts, setDrawerOpts] = useState<{
    name?: IDrawerName,
    props: Pick<DrawerProps, 'placement' | 'size'>
  }>({
    props: {
      placement: 'right',
      size: 'sm',
    }
  })

  const rosterRef = useRef(null)
  const scheduleRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (rosterRef.current && scheduleRef.current) {
      if (scheduleRef.current.getBoundingClientRect().top < 40) {
        setCurrentNavigation('schedule')
      } else if (rosterRef.current.getBoundingClientRect().top < 40) {
        setCurrentNavigation('roster')
      }
    }
  }

  const onSelectCharacter = (characterName: ICharacter['name']) => {
    dispatch.roster.addCharacter({
      character: { name: characterName },
      weapon: { name: null },
      artifacts: { flower: null, plume: null, sands: null, goblet: null, circlet: null }
    })
  }

  const onSelectArtifact = (characterName: ICharacter['name'], artifact: IArtifactItem['name'], type: IArtifactType) => {
    dispatch.roster.addArtifact({ character: characterName, artifact, type })
  }

  const onSelectWeapon = (characterName: ICharacter['name'], weapon: IWeapon['name']) => {
    dispatch.roster.addWeapon({ character: characterName, weapon })
  }

  const onSelectRoster = (index: number) => {
    dispatch.roster.setCurrentRosterIndex(index)
    window.scrollTo(0, 0)
  }

  const onAddRoster = () => dispatch.roster.addRoster()

  const onOpenDrawer = (name: IDrawerName, character?: ICharacter) => {
    if (character) {
      setCurrentCharacter(character)
    }
    setDrawerOpts({ ...drawerOpts, name })
    onOpen()
  }

  const onCloseDrawer = () => {
    onClose()
    setDrawerOpts({
      props: {
        placement: 'right',
        size: 'sm',
      }
    })
    setCurrentCharacter(undefined)
  }

  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SimpleGrid gridTemplateColumns={{ base: '1fr', lg: '240px 1fr', xl: '300px 1fr' }}>
        <Box display={{ base: 'none', lg: 'block' }} minHeight="100vh" background="#fff">
          <AppMenu
            onSelectRoster={onSelectRoster}
            onAddRoster={onAddRoster}
            currentNavigation={currentNavigation}
          />
        </Box>
        <Box pb={10}>
          <Box pt={10} pb={4} px={{ base: 6, md: 10, xl: '6rem' }}>
            <Header username={userRosterCurrentName} title="Your roster" />
          </Box>
          <Box px={{ base: 6, md: 10, xl: '6rem' }}>
            
            <Box ref={rosterRef}>
              <Stack direction="row" align="center" justify="flex-end" pb={2}>
                {/* <Title label="Your roster" /> */}
                <Button onClick={() => onOpenDrawer('characters')}>Add a character</Button>
              </Stack>
              <Box
                px={{ base: 8, md: 10 }}
                py={{ base: 2, md: 6 }}
                borderRadius="md"
                boxShadow="lg"
                background="#fff"
              >
                <VStack
                  width="100%"
                  divider={<Divider key={0} borderColor="gray.200" />}
                >
                  {userRoster.map((roster, index) => {
                    const character = getCharacterByName(roster.character?.name)
                    const artifacts = getCharacterArtifacts(roster.artifacts)
                    const weapon = getWeaponByName(roster.weapon?.name)

                    return (
                      <Box key={index} width="100%">
                        <CharacterCard
                          character={character}
                          artifacts={artifacts}
                          weapon={weapon}
                          onOpenArtifactsDrawer={() => {
                            onOpenDrawer('artifacts', character)
                          }}
                          onOpenWeaponsDrawer={() => {
                            onOpenDrawer('weapons', character)
                          }}
                        />
                      </Box>
                    )
                  })}
                </VStack>
              </Box>
            </Box>

            <Box ref={scheduleRef}>
              <Schedule
                userRosterCharacters={userRosterCharacters}
                userRosterCharactersWeapons={userRosterCharactersWeapons}
              />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>

      <Drawer
        isOpen={isOpen}
        onClose={onCloseDrawer}
        {...drawerOpts.props}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            {drawerOpts?.name === 'artifacts' && (
              <>
                <DrawerBody>
                  <ArtifactsMenu
                    character={currentCharacter}
                    onSelect={onSelectArtifact}
                  />
                </DrawerBody>
              </>
            )}
            {drawerOpts?.name === 'weapons' && (
              <>
                <DrawerBody>
                  <WeaponsMenu
                    character={currentCharacter}
                    onSelect={onSelectWeapon}
                  />
                </DrawerBody>
              </>
            )}
            {drawerOpts?.name === 'characters' && (
              <>
                <DrawerBody>
                  <CharactersMenu
                    onSelect={onSelectCharacter}
                    userRosterCharacters={userRosterCharacters}
                  />
                </DrawerBody>
              </>
            )}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}

export default Home
