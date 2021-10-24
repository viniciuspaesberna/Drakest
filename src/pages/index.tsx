import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import Head from 'next/head'

import { Flex, Image, Stack } from '@chakra-ui/react'

import { Loading } from '../components/common'
import { HomeHeader, JoinRoomForm, CreateRoomForm } from '../components/layout/home'
import { useLoding } from '../hooks/useLoding'

export default function Home() {
  const { isLoading } = useLoding()

  if(isLoading){    
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Home | Drakest</title>
      </Head>

      <HomeHeader />
      
      <Flex 
        as="main"
        display="flex"
        h="85vh"
        justify="center"
      >
        {/* <Aside /> */}

        <Flex
          align="center"
          flexDir="column"
          mb="4rem"
        >
          <Flex maxW={["600px", "500px", "500px", "500px" ]} w="100%" flexShrink={0} mb="1rem" overflow="hidden">
            <Image src="/images/bg.png" h="100%" w="100%" />
          </Flex>

          <Stack 
            direction={['column', "row"]}
            spacing={['5rem', "15rem"]}
            h="100%"
            display="flex"
            align="center"
            justify="center"
          >
            <CreateRoomForm />
            
            <JoinRoomForm />
          </Stack>
        </Flex>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  let session: boolean

  if(cookies['next-auth.session-token'] || cookies['__Secure-next-auth.session-token']){
    session = true
  } else {
    session = false 
  }

  return {
    props: {
      session
    }
  }
}