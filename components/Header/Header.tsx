import React from 'react'
import {
  Box,
  Heading,
} from '@chakra-ui/react'

const Header = () => {
  return (
    <Box py={10}>
      <Heading size="md" fontWeight="medium">Hi Friend,</Heading>
      <Heading size="lg" fontWeight="semibold">Pagename</Heading>
    </Box>
  )
}

export default Header
