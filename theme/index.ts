import { extendTheme } from '@chakra-ui/react'
import colors from './colors'

const theme = extendTheme({
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Poppins, Georgia, serif',
    mono: 'Menlo, monospace',
  },
  colors,
})

console.log('theme: ', theme)

export default theme
