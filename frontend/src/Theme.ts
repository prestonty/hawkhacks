import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/open-sans'
import '@fontsource-variable/raleway'
// import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.400',
        color: 'white',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})

// // Version 2: Using functions
// const overrides = extendTheme({
//   styles: {
//     global: (props: StyleFunctionProps) => ({
//       body: {
//         fontFamily: 'body',
//         color: mode('gray.800', 'whiteAlpha.900')(props),
//         bg: mode('white', 'gray.800')(props),
//         lineHeight: 'base',
//       },
//     }),
//   },
// })

export default theme