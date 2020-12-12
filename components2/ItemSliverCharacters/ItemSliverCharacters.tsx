import React from 'react'
import { AspectRatio, Box, HStack, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface IProps {
  characters: any
  title: string
  showCharacter: boolean
}

const ItemSliverCharacters = ({ characters, title, showCharacter }: IProps) => (
  <HStack flex="0 0 auto" spacing="8px">
    {!!title && <Flex
      align="center"
      justify="center"
      flex="0 0 32px"
      alignSelf="stretch"
      width="32px"
      minH="32px"
      borderRadius=".5rem"
      background="#E7FAFF"
    >
      <Text
        fontSize="13px"
        fontWeight="600"
        lineHeight="1.38462"
      >
        {title}
      </Text>
    </Flex>}
    <HStack spacing={0}>
      {characters.map((character) => (
        <HStack
          key={character.name}
          overflow="hidden"
          borderRadius="8px"
          background="#f2f4f8"
        >
          <AspectRatio
            ratio={1}
            flex="0 0 32px"
            width="32px"
            height="32px"
          >
            <Box position="relative" width="100%" height="100%">
              <Image
                src={character.images.image}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </AspectRatio>
          {showCharacter && characters.length < 2 && <Text
            mb="1px"
            pr="12px"
            pl="8px"
            fontSize="14px"
            lineHeight="1.1875"
            fontWeight="500"
          >
            {character.name}
          </Text>}
        </HStack>
      ))}
    </HStack>
  </HStack>
)

export default ItemSliverCharacters
