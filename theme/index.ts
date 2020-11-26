import { extendTheme } from '@chakra-ui/react'
import colors from './colors'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: '#11142D',
        '-webkit-font-smoothing': 'antialiased'
      },
    },
  },
  breakpoints: {
    sm: '35em', // 560px
    md: '56.25em', // 900px
    xl: '88.75em', // 1420px
    xxl: '103.75em', // 1660px
  },
  sizes: {
    container: '100rem',
  },
  fonts: {
    body: '-apple-system, system-ui, sans-serif',
    heading: 'Poppins, -apple-system, system-ui, sans-serif', //'Poppins, Georgia, serif',
    mono: 'Menlo, monospace',
  },
  colors,
})

console.log(theme)

export default theme
