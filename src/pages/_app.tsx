import { Box, ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'
import { getSession, Provider } from 'next-auth/client'
import { CurrentCharacterSheetContextProvider } from '../contexts/CurrentCharacterSheetContext'
import { DicesProvider } from '../contexts/DicesContext'
import { AuthProvider } from '../contexts/auth'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <AuthProvider>
        {/* <CurrentCharacterSheetContextProvider> */}
            <ChakraProvider theme={theme}>
              <Box 
                as="main" 
                fontFamily="Quicksand"
              >
                <Component {...pageProps} />
              </Box>
            </ChakraProvider>
        {/* </CurrentCharacterSheetContextProvider> */}
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