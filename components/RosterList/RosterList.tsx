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
import useRematchDispatch from '../../hooks/useRematch'
import api from '../../api'
import { IRoster } from '../../types'
import CharactersSelector from '../CharactersSelector'
import RosterListItem from './RosterListItem'

const RosterList = ({ currentRoster }) => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const { isOpen: isSelectCharacterDrawerOpen, onOpen: onSelectCharacterDrawerOpen, onClose: onSelectCharacterDrawerClose } = useDisclosure()

  const characters = api.getCharacterByIds(currentRoster.map((roster) => roster.character.id), {
    withTalents: true,
  })

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
      {characters.length > 0
        ? (
          <SimpleGrid columns={1} spacing="0.75rem">
            {characters.map((character, index) => {
              return (
                <RosterListItem
                  key={character.id}
                  ascension={currentRoster[index].character.ascension}
                  character={character}
                  isDisabled={currentRoster[index].isDisabled}
                  onDisabled={() => onDisabledCharacter(index)}
                  talents={currentRoster[index].character.talents}
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
                <CharactersSelector />
              </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}

export default RosterList
