import React from 'react'
import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react'
import { MdModeEdit } from 'react-icons/md'
import { IArtifactItem, ICharacter, IWeapon } from '../../types'
import colors from '../../theme/colors'

interface IProps {
  image?: ICharacter['images']['portrait']
  placeholderImage?: string
  label?: ICharacter['name']
  placeholderLabel?: string
  element: ICharacter['element']
  onClick?: () => void
}

const ListCharacter = ({
  image,
  placeholderImage = 'https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Adventurer%27s_Flower.png',
  label,
  placeholderLabel = 'Select an item',
  element,
  onClick,
}: IProps) => {
  const color = colors[element.toLowerCase()]

  return (
    <HStack
      onClick={onClick}
      spacing={0}
      alignItems="stretch"
      transform="translateX(-80px)"
      cursor="pointer"
    >
      <Box position="relative" flex="0 0 80px" background={`linear-gradient(to left, ${color}, #fff)`}>
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          pr="20px"
          transform="translateY(-20px)"
        >
          <Box
            as="img"
            src={image || placeholderImage}
            {...(!image ? { style: { filter: 'grayscale(1)'}} : {})}
          />
        </Box>
      </Box>
      <Flex
        flex="0 0 100%"
        alignItems="center"
        minHeight="44px"
        pr={8}
        pl={2}
        background={`${color}`}
        borderRadius="0 8px 8px 0"
      >
        <Text
          color="#fff"
          fontFamily="heading"
          fontSize="16px"
          fontWeight="semibold"
        >
          {label || placeholderLabel}
        </Text>
      </Flex>
    </HStack>
  )
}

export default ListCharacter
