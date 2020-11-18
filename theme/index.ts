import { extendTheme } from '@chakra-ui/react'
import colors from './colors'

const theme = extendTheme({
  breakpoints: {
    sm: '35em', // 560px
    xxl: '96.25em', // 1540px
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Poppins, Georgia, serif',
    mono: 'Menlo, monospace',
  },
  colors,
})

// console.log('theme: ', theme)

export default theme
