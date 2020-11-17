import Head from 'next/head'
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { IArtifactItem, ICharacter, IRosterCharacter, IWeapon } from '../../types'
import CharAvatar from '../CharAvatar'
import ListCharacter from '../ListCharacter'
import ListObject from '../ListObject'

interface IProps {
  artifacts: {
    flower: IArtifactItem | null
    plume: IArtifactItem | null
    sands: IArtifactItem | null
    goblet: IArtifactItem | null
    circlet: IArtifactItem | null
  }
  character: ICharacter
  weapon?: IWeapon
  onOpenArtifactsDrawer: () => void
  onOpenWeaponsDrawer: () => void
}

const Label = (props: { text: string }) => (
  <Text
    pb={2}
    fontFamily="heading"
    fontSize="1.125rem"
    fontWeight="medium"
  >
    {props.text}
  </Text>
)

const CharCard = ({
  artifacts,
  character,
  weapon,
  onOpenArtifactsDrawer,
  onOpenWeaponsDrawer,
}: IProps) => {

  if (!character) {
    return null
  }

  return (
    <>
      <Box
        width="100%"
        pt={8}
        pb={6}
        pl="80px"
      >
        <Stack
          direction="row"
          spacing={8}
        >
          <Flex direction="column" pb={8} flex="0 0 130px">
            <Box width="100%">
              <ListCharacter
                label={character.name}
                image={character.images.portrait}
                element={character.element}
              />
            </Box>
          </Flex>
          <Box flex={1}>
            <SimpleGrid
              gridTemplateColumns="1fr 1fr 1fr"
              spacing=".5rem"
              spacingX="2rem"
            >
              {/* <Label text="Weapon" /> */}
              <ListObject
                label={weapon?.name}
                placeholderLabel="Select a weapon"
                image={weapon?.images.image}
                onClick={onOpenWeaponsDrawer}
              />
              {Object.keys(artifacts).map((key, index) => (
                <ListObject
                  key={index}
                  label={artifacts[key]?.name}
                  placeholderLabel={`Select a ${key}`}
                  image={artifacts[key]?.images.image}
                  onClick={onOpenArtifactsDrawer}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Box>
      {/* <Box
        width="100%"
        pt={8}
        pb={6}
        pl="80px"
      >
        <Box width="100%">
          <Stack direction="row" spacing="30px">
            <Box flex="0 1 320px">
              <Box pb={8}>
                <ListCharacter
                  label={character.name}
                  image={character.images.portrait}
                />
              </Box>
              <Label text="Weapon" />
              <ListObject
                label={weapon?.name}
                placeholderLabel="Select a weapon"
                image={weapon?.images.image}
                onClick={onOpenWeaponsDrawer}
              />
            </Box>
            <Box flex="0 1 660px">
              <Label text="Artifacts" />
              <SimpleGrid
                gridTemplateColumns="1fr 1fr"
                spacing=".5rem"
                spacingX="2rem"
              >
                {Object.keys(artifacts).map((key, index) => (
                  <ListObject
                    key={index}
                    label={artifacts[key]?.name}
                    placeholderLabel={`Select a ${key}`}
                    image={artifacts[key]?.images.image}
                    onClick={onOpenArtifactsDrawer}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box
        width="100%"
        pt={8}
        pb={6}
        pl="80px"
      >
        <Stack
          direction="row"
          spacing={12}
        >
          <Box pb={8}>
            <ListCharacter
              label={character.name}
              image={character.images.portrait}
            />
          </Box>
          <Box flex={1}>
            <Label text="Weapon" />
            <ListObject
              label={weapon?.name}
              placeholderLabel="Select a weapon"
              image={weapon?.images.image}
              onClick={onOpenWeaponsDrawer}
            />
          </Box>
        </Stack>
        <Label text="Artifacts" />
        <SimpleGrid
          gridTemplateColumns="1fr 1fr 1fr"
          spacing=".5rem"
          spacingX="2rem"
        >
          {Object.keys(artifacts).map((key, index) => (
            <ListObject
              key={index}
              label={artifacts[key]?.name}
              placeholderLabel={`Select a ${key}`}
              image={artifacts[key]?.images.image}
              onClick={onOpenArtifactsDrawer}
            />
          ))}
        </SimpleGrid>
      </Box> */}
    </>
  )
}

export default CharCard
