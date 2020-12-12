import React from 'react'
import { AspectRatio, Box, HStack, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

const ItemSliver = ({ image, title, background = '#f2f4f8' }) => (
  <HStack spacing="8px">
    {image && <AspectRatio
      ratio={1}
      overflow="hidden"
      flex="0 0 32px"
      width="32px"
      height="32px"
      borderRadius="8px"
      background="#f2f4f8"
    >
      <Box position="relative" width="100%" height="100%">
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
        />
      </Box>
    </AspectRatio>}
    {!!title && <Flex
      align="center"
      flex="1 1 auto"
      alignSelf="stretch"
      minH="32px"
      px={4}
      borderRadius=".5rem"
      background={background}
    >
      <Text
        mb="1px"
        fontSize="14px"
        lineHeight="1.1875"
        fontWeight="500"
      >
        {title}
      </Text>
    </Flex>}
  </HStack>
)

export default ItemSliver
