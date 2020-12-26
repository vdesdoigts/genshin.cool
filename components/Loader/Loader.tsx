import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

const Loader = () => (
  <Flex
    position="fixed"
    zIndex={2000}
    top={0}
    left={0}
    alignItems="center"
    justifyContent="center"
    width="100%"
    height="100%"
    bg="#fff"
  >
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="#6C5DD3"
      size="xl"
    />
  </Flex>
)

export default Loader
