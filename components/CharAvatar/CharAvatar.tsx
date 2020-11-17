import React from 'react'
import {
  AspectRatio,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react'
import { ICharacter } from '../../types'

const borderRadius = '14px'

interface IProps {
  character: ICharacter
}

const CharCard = ({ character }: IProps) => {
  const { name } = character

  return (
    <Box>
      <AspectRatio
        ratio={1}
        borderRadius={borderRadius}
        background={`${character.element.toLowerCase()}`}
      >
        <Flex
          overflow="visible"
          align="flex-end"
          flexDir="column"
        >
          <Box
            position="relative"
            flex={1}
            width="100%"
            borderRadius={`${borderRadius} ${borderRadius} ${borderRadius} 0`}
            // background="rgba(255, 255, 255, .2)"
            background="#fff"
            borderWidth="2px"
            borderStyle="solid"
            borderColor={`${character.element.toLowerCase()}`}
          >
            <Flex
              overflow="hidden"
              position="absolute"
              bottom={0}
              justify="center"
              width="100%"
              borderRadius={`0 0 ${borderRadius} 0`}
            >
              <Box
                as="img"
                src={character.images.image}
                width="90%"
              />
            </Flex>
          </Box>
          <Box
            position="relative"
            zIndex={2}
            width="100%"
            py={2}
            borderRadius={`0 ${borderRadius} ${borderRadius} ${borderRadius}`}
            background={`${character.element.toLowerCase()}`}
          >
            <Text
              color="#fff"
              fontFamily="heading"
              fontSize="18px"
              fontWeight="semibold"
              textAlign="center"
              letterSpacing="1px"
            >
              {name}
            </Text>
          </Box>
        </Flex>
      </AspectRatio>
    </Box>
  )
}

export default CharCard
