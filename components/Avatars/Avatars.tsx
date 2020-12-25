import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

const Avatars = ({ items }) => (
  <Box
    role="group"
  >
    <Flex>
      {items.map((item, index) => (
        <Box
          overflow="hidden"
          position="relative"
          zIndex={100 - index}
          w="34px"
          h="34px"
          ml={index > 0 ? '-10px' : 0 }
          border="2px solid #fff"
          borderRadius="50%"
        >
          <Image src={item.images.image} layout="fill" objectFit="contain" />
        </Box>
      ))}
    </Flex>
  </Box>
)

export default Avatars
