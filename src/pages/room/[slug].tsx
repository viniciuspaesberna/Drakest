import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";

import { Flex, useDisclosure } from "@chakra-ui/react";

import { DicesSection, Characters, CharacterSheetModal, RoomHeader } from "../../components/layout/room";
import { Loading } from "../../components/common/Loading";
import { useLoding } from "../../hooks/useLoding";
import { useRouter } from "next/router";

export default function Room({user, roomId}){
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {isLoading} = useLoding()

  if(isLoading){    
    return <Loading />;
  }

  if(router.isFallback){    
    return <Loading />;
  }

  return(
    <>
      <Head>
        <title>Room-{roomId} | Drakest</title>
      </Head>
      
      <CharacterSheetModal
        isOpen={isOpen} 
        onRequestClose={onClose}
      />

      <Flex w="100vw" h="100vh" flexDir="column">
        <RoomHeader />

        <Flex h="95vh">
          <Flex
            w="30rem"
            h="100%"
            bg="gray.900"
            rounded="3xl" 
            mx="6"
            mb="4"
          >
            <DicesSection />
          </Flex>

          <Flex align="center" w="100%"  ml="auto" maxW="400px">
            <Characters openCharacterSheet={onOpen} />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
  const session = await getSession({req})   
  const {slug} = params

  if(!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const user = session.user

  return {
    props: {
      user,
      roomId: slug
    }
  }
}