import React from 'react'
import {
  AspectRatio,
  Box,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'

interface IProps {
  image: string 
  title: string
}

const ItemFragment = ({ image, title }: IProps) => (
  <Stack spacing={2}>
    <HStack spacing="8px" align="center" justify="stretch">
      <AspectRatio
        ratio={1}
        overflow="hidden"
        flex="0 0 36px"
        width="36px"
        height="36px"
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
      </AspectRatio>
      <Stack flex="1 1 100%" width="100%">
        <Text
          mb="1px"
          pr="12px"
          pl="8px"
          fontSize="14px"
          lineHeight="1.1875"
          fontWeight="500"
        >
          {title}
        </Text>
      </Stack>
    </HStack>
  </Stack>
)

export default ItemFragment
