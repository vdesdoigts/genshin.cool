import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

interface IProps {
  title?: string
}

const DashCard: React.FC<IProps> = ({ children, title }) => {
  return (
    <Box
      bg="#fff"
      borderRadius="1.25rem"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
    >
      {title && <Heading
        pt={6}
        pb={2}
        px={8}
        size="md"
        fontWeight="semibold"
      >
        {title}
      </Heading>}
      {children}
    </Box>
  )
}

export default DashCard
