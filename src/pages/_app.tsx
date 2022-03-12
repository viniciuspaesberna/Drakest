import { Box, ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'
import { getSession, Provider } from 'next-auth/client'
import { AuthProvider } from '../contexts/auth'

import { theme } from '../styles/theme'
import { global } from '../styles/global'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'

function MyApp({ Component, pageProps }: AppProps) {
  global()

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
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