import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

interface IProps {
  title?: string
  variant?: 'pink' | 'blue'
  size?: 'sm'
  shadow?: boolean
}

const DashBox: React.FC<IProps> = ({ children, title, variant, size, shadow }) => {
  let bgcolor
  let px

  switch (variant) {
    case 'pink':
      bgcolor = '#FFEBF6'
      break
    case 'blue':
      bgcolor = 'rgba(160, 215, 231, 0.85)'
      break
    default:
      bgcolor = '#FFF'
  }

  switch (size) {
    case 'sm':
      px = '8px'
      break;
    default:
      px = '32px'
  }

  return (
    <Box
      position="relative"
      pt="32px"
      pb={px}
      borderRadius="24px"
      background={bgcolor}
      _before={shadow ? {
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
      } : {}}
    >
      {!!title && <Heading mb="32px" px="32px" fontSize="18px" fontWeight="medium" lineHeight="1.33333">{title}</Heading>}
      <Box px={px}>
        {children}
      </Box>
    </Box>
  )
}

export default DashBox
