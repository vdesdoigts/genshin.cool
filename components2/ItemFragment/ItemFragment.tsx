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
  description?: string
  characters?: any[]
}

const ItemFragment = ({ image, title, description, characters }: IProps) => (
  <Stack spacing={2}>
    <HStack spacing="16px" align="center">
      <AspectRatio
        ratio={1}
        flex="0 0 60px"
        width="60px"
        height="60px"
        borderRadius="16px"
        background="#f2f4f8"
      >
        <Box width="100%" height="100%" p={2}>
          <Box position="relative" width="100%" height="100%">
            <Image
              src={image}
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
      </AspectRatio>
      <Stack width="100%">
        <Box>
          <Text
            mb="3px"
            fontSize="16px"
            lineHeight="1.1875"
            fontWeight="600"
          >
            {title}
          </Text>
          {description && <Text
            color="#808191"
            fontSize="13px"
            lineHeight="1.38462"
            fontWeight="600"
          >
            {description}
          </Text>}
        </Box>
      </Stack>
    </HStack>
  </Stack>
)

export default ItemFragment
