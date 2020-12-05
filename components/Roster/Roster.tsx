import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'
import { getCharacterById } from '../../api'
import { IRoster } from '../../types'
import SelectCharactersMenu from '../SelectCharactersMenu'
import CharacterItem from '../CharacterItem'

const Roster = () => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const currentRoster: IRoster = useSelector(ProfileSelectors.getCurrentRoster)
  const { isOpen: isSelectCharacterDrawerOpen, onOpen: onSelectCharacterDrawerOpen, onClose: onSelectCharacterDrawerClose } = useDisclosure()

  const onDisabledCharacter = (index: number) => {
    dispatch.profile.toggleRoster(index)
  }

  return (
    <Box>
      <HStack width="100%" align="center" justify="space-between" mb="16px">
        <Heading
          fontSize="18px"
          fontWeight="500"
          lineHeight="1.33333"
        >
          {t('site.your_roster')}
        </Heading>
        <Button
          position="relative"
          width="48px"
          height="48px"
          background="none"
          borderRadius="50%"
          fontSize="0"
          transition="all .25s"
          onClick={onSelectCharacterDrawerOpen}
          cursor="pointer"
          _hover={{
            boxShadow: '0 5px 10px rgba(227, 230, 236, 0.6)',
          }}
        >
          <Icon as={FiSettings} w={6} h={6} />
        </Button>
      </HStack>
      {currentRoster.length > 0
        ? (
          <SimpleGrid columns={1} spacing="0.75rem">
            {currentRoster.map((roster, index) => {
              const character = getCharacterById(roster.character.id)
              
              return (
                <CharacterItem
                  key={roster.character.id}
                  ascension={roster.character.ascension}
                  character={character}
                  isDisabled={roster.isDisabled}
                  onDisabled={() => onDisabledCharacter(index)}
                  shadow
                />
              )
            })}
          </SimpleGrid>
        )
        : <Box>{t('site.your_roster_empty')}</Box>
      }
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
    </Box>
  )
}

export default Roster
