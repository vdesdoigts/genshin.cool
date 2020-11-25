import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

interface IProps {
  title?: string
  size?: 'base' | 'sm'
}

const DashBox: React.FC<IProps> = ({ children, title, size = 'base' }) => {
  return (
    <Box
      position="relative"
      padding="32px"
      borderRadius="24px"
      background="#ffffff"
      _before={{
        content: '""',
        position: 'absolute',
        top: '22px',
        left: '18px',
        right: '18px',
        bottom: '-40px',
        zIndex: '-2',
        background: '#E3E6EC',
        opacity: '0.91',
        // @ts-ignore
        filter: 'blur(86.985px)',
        borderRadius: '24px'
      }}
    >
      {!!title && <Heading mb="32px" fontSize="18px" fontWeight="medium" lineHeight="1.33333">{title}</Heading>}
      {children}
    </Box>
  )
}

export default DashBox
