import React from 'react'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'
import { getArtifactsCharacter, getCharacterById, getWeaponById } from '../../api'
import { ICharacter, IRosterCharacter, IWeapon } from '../../types'
import ListObject from '../ListObject'
import WeaponsMenu from '../WeaponsMenu'

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}

interface IProps {
  character?: ICharacter['id']
}

const EditCharacter = ({ character: characterId }: IProps) => {

  if (!characterId) {
    return null
  }

  const dispatch = useRematchDispatch()
  const rosterCharacter = useSelector((state) => ProfileSelectors.getRosterCharacterById(state, characterId))
  const character = getCharacterById(characterId)
  const weapon = getWeaponById(rosterCharacter.weapon?.id)
  const artifacts = getArtifactsCharacter(rosterCharacter?.artifacts)
  const { isOpen: isWeaponDrawerOpen, onOpen: onWeaponDrawerOpen, onClose: onWeaponDrawerClose } = useDisclosure()

  const ascensionOptions = ['1', '2', '3', '4', '5', '6']
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'ascension',
    defaultValue: (rosterCharacter.character.ascension || 1).toString(),
    onChange: (e) => onSelectAscension(character.id, (parseInt(e as string) as IRosterCharacter['character']['ascension'])),
  })
  const group = getRootProps()

  const onSelectWeapon = (character: ICharacter['id'], weapon: IWeapon['id']) => {
    dispatch.profile.addWeapon({ character, weapon })
    onWeaponDrawerClose()
  }

  const onSelectAscension = (character: ICharacter['id'], ascension: IRosterCharacter['character']['ascension']) => {
    dispatch.profile.updateCharacterAsension({ character, ascension })
  }

  return (
    <>
      <Box pt={10}>
        <Stack direction="row" spacing="1.875rem">
          <Box overflow="hidden" width="5.625rem" height="5.625rem" borderRadius=".5rem" background="#f2f4f8">
            <Image
              src={character.images.image}
            />
          </Box>
          <Stack spacing={1} justify="center">
            <Text
              color="#4b4d55"
              fontFamily="heading"
              fontSize="1.25rem"
              fontWeight="semibold"
              lineHeight="1"
            >
              {character.name}
            </Text>
            <Text color="#bbbdcb" fontSize="1rem" fontWeight="medium">{character.affiliation}</Text>
          </Stack>
        </Stack>
        <HStack {...group}>
          {ascensionOptions.map((value) => {
            const radio = getRadioProps({ value })
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            )
          })}
        </HStack>
        <Box pt={8}>
          <Heading
            pb={4}
            color="#4b4d55"
            fontSize="1rem"
            fontWeight="light"
            lineHeight="1"
            _after={{
              content: "''",
              display: "block",
              width: "100%",
              height: '1px',
              mt: ".75rem",
              background: '#eef0f4',
            }}
          >
            Equipments
          </Heading>
        </Box>
        <Box flex={1}>
          <SimpleGrid
            gridTemplateColumns="1fr"
            spacing=".5rem"
            spacingX="2rem"
          >
            <ListObject
              label={weapon?.name}
              placeholderLabel="Select a weapon"
              image={weapon?.images.image}
              onClick={onWeaponDrawerOpen}
            />
            {Object.keys(artifacts).map((key, index) => (
              <ListObject
                key={index}
                label={artifacts[key]?.name}
                placeholderLabel={`Select a ${key}`}
                image={artifacts[key]?.images.image}
                // onClick={onOpenArtifactsDrawer}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Drawer
        isOpen={isWeaponDrawerOpen}
        onClose={onWeaponDrawerClose}
        size="md"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
              <DrawerBody>
                <WeaponsMenu
                  character={character}
                  onSelect={onSelectWeapon}
                />
              </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default EditCharacter
