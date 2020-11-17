import React from 'react'
import {
  Box,
  Heading,
} from '@chakra-ui/react'

interface IProps {
  username?: string
  title: string
}

const Header = ({ username, title }: IProps) => {
  return (
    <Box {...(!username ? { display: 'flex', alignItems: 'center' } : {})}>
      {username && <Heading as="h3" size="md" fontWeight="medium">Hi {username} 👋</Heading>}
      <Heading size="lg" fontWeight="semibold">{title}</Heading>
    </Box>
  )
}

export default Header
