import { Box, ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'
import { DicesProvider } from '../contexts/DicesContext'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DicesProvider>
      <ChakraProvider theme={theme}>
        <Box as="main" fontFamily="Quicksand">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </DicesProvider>
  )
}

export default MyApp
