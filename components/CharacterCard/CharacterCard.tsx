import React from 'react'
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import { ICharacter, IWeapon } from '../../types'

interface IProps {
  character: ICharacter
  weapon?: IWeapon
}

const getColorByTypeElement = (element: ICharacter['element']) => {
  let color

  switch (element) {
    case 'Electro':
      color = 'linear-gradient(to left, #8e2de2, #4a00e0)'
      break
    case 'Pyro':
      color = 'linear-gradient(to left, #ed213a, #93291e)'
      break
    case 'Hydro':
      color = 'linear-gradient(to left, #00b4db, #0083b0)'
      break
    case 'Anemo':
      color = 'linear-gradient(to right, #1d976c, #93f9b9)'
      break
    default:
      color = '#000'
  }

  return color
}

const CharacterCard = ({ character, weapon }: IProps) => {
  return (
    <Stack
      overflow="hidden"
      align="center"
      direction="row"
      spacing={6}
      background={getColorByTypeElement(character.element)}
      borderRadius="50%"
      padding={2}
    >
      <AspectRatio ratio={1} width="100%" background="#fff" borderRadius="50%" overflow="hidden">
        <img src={character.images.image} />
      </AspectRatio>
      {/* <Stack spacing={1} justify="flex-start" color="#fff">
        <Heading as="p" size="md" fontWeight="semibold">{character.name}</Heading>
        <Text mt={0}>{weapon ? weapon.name : 'No weapon'}</Text>
      </Stack> */}
    </Stack>
  )
}

export default CharacterCard
