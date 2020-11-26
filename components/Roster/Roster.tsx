import React, { useState } from 'react'
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
  Image,
  Stack,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'
import { getArtifactsCharacter, getCharacterById, getWeaponById } from '../../api'
import { IArtifactCollection, ICharacter, IRoster, IWeapon } from '../../types'
import colors from '../../theme/colors'
import SelectCharactersMenu from '../SelectCharactersMenu'
import EditCharacter from '../EditCharacter'

interface IProps {
  artifacts: IArtifactCollection
  character: ICharacter
  weapon?: IWeapon
  isDisabled?: boolean
  onDisabled?: () => void
  onEdit?: () => void
}

const Character = ({ artifacts, character, weapon, isDisabled, onDisabled, onEdit }: IProps) => {
  return (
    <Box
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
          pl="1.25rem"
          py="1.75rem"
          onClick={onEdit}
        >
          <Stack direction="row" spacing="1.875rem">
            <Box overflow="hidden" flex="0 0 3.5rem" width="3.5rem" height="3.5rem" borderRadius=".5rem" background="#f2f4f8">
              <Image src={character.images.image} />
            </Box>
            <Stack spacing={1} justify="center">
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
                {weapon 
                  // ? <Text fontSize="0.875rem" fontWeight="medium">{weapon.name} & {Object.keys(artifacts).length} artifacts</Text>
                  // : <Text fontSize="0.875rem" fontWeight="medium">No weapon & {Object.keys(artifacts).length} artifacts</Text>
                  ? <Text fontSize="0.875rem" fontWeight="medium">{weapon.name}</Text>
                  : <Text fontSize="0.875rem" fontWeight="medium">No weapon</Text>
                }
              </Box>
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
  const dispatch = useRematchDispatch()
  const currentRoster: IRoster = useSelector(ProfileSelectors.getCurrentRoster)
  const { isOpen: isSelectCharacterDrawerOpen, onOpen: onSelectCharacterDrawerOpen, onClose: onSelectCharacterDrawerClose } = useDisclosure()
  const { isOpen: isEditCharacterDrawerOpen, onOpen: onEditCharacterDrawerOpen, onClose: onEditCharacterDrawerClose } = useDisclosure()
  const [currentCharacter, setCurrentCharacter] = useState<ICharacter['id']>()

  const onDisabledCharacter = (index: number) => {
    dispatch.profile.toggleRoster(index)
  }

  const onEditCharacter = (index: ICharacter['id']) => {
    setCurrentCharacter(index)
    onEditCharacterDrawerOpen()
  }

  return (
    <>
      <HStack width="100%" align="center" justify="space-between" mb="32px">
        <Heading
          fontSize="18px"
          fontWeight="500"
          lineHeight="1.33333"
        >
          Your roster
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
      <SimpleGrid columns={1} spacing="0.75rem">
        {currentRoster.map((roster, index) => {
          const character = getCharacterById(roster.character.id)
          const weapon = getWeaponById(roster.weapon?.id)
          const artifacts = getArtifactsCharacter(roster?.artifacts)
          
          return (
            <Character
              key={roster.character.id}
              artifacts={artifacts}
              character={character}
              weapon={weapon}
              isDisabled={roster.isDisabled}
              onDisabled={() => onDisabledCharacter(index)}
              onEdit={() => onEditCharacter(character.id)}
            />
          )
        })}
      </SimpleGrid>
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
      <Drawer
        isOpen={isEditCharacterDrawerOpen}
        onClose={onEditCharacterDrawerClose}
        size="md"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
              <DrawerBody>
                <EditCharacter character={currentCharacter} />
              </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Roster
