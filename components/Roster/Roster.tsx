import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FiEdit2, FiSettings } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'
import { getArtifactsCharacter, getCharacterById, getWeaponById } from '../../api'
import { IArtifactCollection, ICharacter, IRoster, IRosterCharacter, IWeapon } from '../../types'
import colors from '../../theme/colors'
import SelectCharactersMenu from '../SelectCharactersMenu'
import CharacterItem from '../CharacterItem'
import EditCharacter from '../EditCharacter'

interface IProps {
  artifacts: IArtifactCollection
  ascension?: IRosterCharacter['character']['ascension']
  character: ICharacter
  weapon?: IWeapon
  isDisabled?: boolean
  onDisabled?: () => void
  onEdit?: () => void
}

const Character = ({ artifacts, ascension = 0, character, weapon, isDisabled, onDisabled, onEdit }: IProps) => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const onSelectAscension = (character: ICharacter['id'], ascension: IRosterCharacter['character']['ascension']) => {
    dispatch.profile.updateCharacterAscension({ character, ascension })
  }

  return (
    <Box
      role="group"
      overflow="hidden"
      position="relative"
      borderRadius="0.875rem"
      boxShadow="rgba(236, 240, 250, .4) 0px 1px 1px, rgba(236, 240, 250, 0.4) 0px 2px 2px, rgba(236, 240, 250, 1) 0px 4px 4px, rgba(236, 240, 250, .4) 0px 8px 8px, rgba(236, 240, 250, .4) 0px 16px 16px"
      background="#fff"
      _before={{
        content: "''",
        position: "absolute",
        zIndex: 2,
        top: 0,
        left: 0,
        display: "block",
        width: "4px",
        height: "100%",
        background: colors[character.element.toLowerCase()],
      }}
    >
      <Stack direction="row" spacing="0" align="center" justify="space-between">
        <Box
          flex="1 1 100%"
          pl="1.25rem"
          py="16px"
          // onClick={onEdit}
        >
          <Stack direction="row" spacing="1.875rem">
            <Box position="relative" overflow="hidden" flex="0 0 3.5rem" width="3.5rem" height="3.5rem" borderRadius=".5rem" background="#f2f4f8">
              <Box position="relative" width="100%" height="100%">
                <Image
                  src={character.images.image}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              {/* <Center
                opacity={0}
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                background="rgba(0, 0, 0, .6)"
                borderRadius="10px"
                transition="opacity .2s ease"
                _groupHover={{ opacity: 1 }}
              >
                <Icon as={FiEdit2} w={5} h={5} color="#fff" />
              </Center> */}
            </Box>
            <Stack spacing={1} justify="center" position="relative" cursor="pointer">
              <Text
                color="#4b4d55"
                fontFamily="heading"
                fontSize="1.125rem"
                fontWeight="semibold"
                lineHeight="1"
              >
                {character.name}
              </Text>
              <Box color="#bbbdcb">
                <Text fontSize="0.875rem" fontWeight="medium">
                  {t('site.ascension_rank')} {ascension}
                  {/* &#183; {weapon ? weapon.name : 'No weapon'} */}
                </Text>
              </Box>
              <select
                style={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                defaultValue={ascension.toString()}
                onChange={(e) => onSelectAscension(character.id, (parseInt(e.currentTarget.value) as IRosterCharacter['character']['ascension']))}
                onClick={(e) => e.stopPropagation()}
              >
                <option value="0">{`${t('site.ascension_rank_none')}`}</option>
                <option value="1">{`${t('site.ascension_rank')} 1`}</option>
                <option value="2">{`${t('site.ascension_rank')} 2`}</option>
                <option value="3">{`${t('site.ascension_rank')} 3`}</option>
                <option value="4">{`${t('site.ascension_rank')} 4`}</option>
                <option value="5">{`${t('site.ascension_rank')} 5`}</option>
                <option value="6">{`${t('site.ascension_rank')} 6`}</option>
              </select>
            </Stack>
          </Stack>
        </Box>
        <Flex align="center" justify="center" p={4} pr="1.25rem">
          <Checkbox isChecked={!isDisabled} onChange={(e) => { e.preventDefault(); onDisabled() }} />
        </Flex>
      </Stack>
    </Box>
  )
}

const Roster = () => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const currentRoster: IRoster = useSelector(ProfileSelectors.getCurrentRoster)
  const { isOpen: isSelectCharacterDrawerOpen, onOpen: onSelectCharacterDrawerOpen, onClose: onSelectCharacterDrawerClose } = useDisclosure()
  const { isOpen: isEditCharacterDrawerOpen, onOpen: onEditCharacterDrawerOpen, onClose: onEditCharacterDrawerClose } = useDisclosure()
  const [currentCharacter, setCurrentCharacter] = useState<ICharacter['id']>()

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
        :  (
          <Box>
            {t('site.your_roster_empty')}
          </Box>
        )
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
