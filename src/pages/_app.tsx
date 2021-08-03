import { Box, ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box as="main" fontFamily="Quicksand">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
