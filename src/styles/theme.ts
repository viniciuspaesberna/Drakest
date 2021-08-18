import { ChakraTheme, extendTheme } from '@chakra-ui/react' 

export const theme: ChakraTheme = extendTheme({
  styles: {
    colors: {
      gray: {
        "900": "#181b23",
        "800": "#1f2029",
        "700": "#353646",
        "600": "#4b4d63",
        "500": "#616480",
        "400": "#797d9a",
        "300": "#9699b0",
        "200": "#b3b5c6",
        "100": "#d1d2dc",
        "50": "#eeeef2",
      }
    },
    fonts: {
      heading: 'Quicksand',
      body: 'Quicksand'
    },
    global: {
      html: {
        h: '100vh'
      },
      body: {
        h: '100%',
        bg: 'gray.800',
        color: 'gray.50'
      }
    }
  }
})