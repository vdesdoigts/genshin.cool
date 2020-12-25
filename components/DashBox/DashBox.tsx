import React from 'react'
import { Box, BoxProps, Flex, Heading } from '@chakra-ui/react'

interface IProps {
  title?: string
  variant?: 'pink' | 'blue' | 'purple' | 'transparent'
  size?: 'xxs' | 'xs' | 'sm' | 'md'
  br?: 'sm'
  shadow?: boolean
  rightButtons?: any
}

const DashBox: React.FC<IProps & Omit<BoxProps, 'shadow'>> = ({ children, title, variant, size, br, shadow, rightButtons, ...boxProps }) => {
  let bgcolor
  let borderRadius
  let px

  switch (variant) {
    case 'pink':
      bgcolor = '#FFEBF6'
      break
    case 'blue':
      bgcolor = '#E7FAFF'
      break
    case 'purple':
      bgcolor = '#CFC8FF'
      break
    case 'transparent':
      bgcolor = 'transparent'
      break
    default:
      bgcolor = '#FFF'
  }

  switch (br) {
    case 'sm':
      borderRadius = '12px'
      break
    default:
      borderRadius = '24px'
  }

  switch (size) {
    case 'xxs':
      px = '4px'
      break
    case 'xs':
      px = '8px'
      break
    case 'sm':
      px='16px'
      break
    case 'md':
      px='24px'
      break
    default:
      px = '32px'
  }

  return (
    <Box
      position="relative"
      pt={title ? '32px' : px}
      pb={px}
      borderRadius={borderRadius}
      background={bgcolor}
      transition="all .25s"
      {...boxProps}
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
      {!!title && <Heading as="h2" mb="24px" px="32px" fontSize="18px" fontWeight="medium" lineHeight="1.33333" color="">{title}</Heading>}
      {!!rightButtons && (
        <Box
          position="absolute"
          top="20px"
          right={px}
        >
          {rightButtons}
        </Box>
      )}
      <Box px={px}>
        {children}
      </Box>
    </Box>
  )
}

export default DashBox
