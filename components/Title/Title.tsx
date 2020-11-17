import React from 'react'
import { Heading } from '@chakra-ui/react'

const Title = ({ label }: { label: string }) => (
  <Heading
    as="h2"
    size="md"
    fontWeight="medium"
  >
    {label}
  </Heading>
)

export default Title
