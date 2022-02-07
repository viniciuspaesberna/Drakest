import { Box, ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'
import { getSession, Provider } from 'next-auth/client'
import { AuthProvider } from '../contexts/auth'

import { theme } from '../styles/theme'
import { global } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  global()

  return (
    <Provider session={pageProps.session}>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <Box
            as="main"
            fontFamily="Quicksand"
          >
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </AuthProvider>
    </Provider>
  )
}

export default MyApp

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}