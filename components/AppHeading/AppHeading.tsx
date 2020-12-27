import React from 'react'
import { Heading } from '@chakra-ui/react'

const AppHeading = ({ title, subtitle }) => (
  <>
    <Heading
      as="h2"
      pl={{ base: '16px', md: 0 }}
      fontSize={{ base: '16px', md: '24px' }}
      lineHeight="1.33333"
      fontWeight="500"
    >
      {subtitle}
    </Heading>
    <Heading
      as="h1"
      pl={{ base: '16px', md: 0 }}
      fontSize={{ base: '32px', md: '48px' }}
      lineHeight="1.5"
      fontWeight="600"
      letterSpacing="-1px"
    >
      {title}
    </Heading>
  </>
)

export default AppHeading
