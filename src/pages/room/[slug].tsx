import { useContext, useEffect } from 'react'
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

import { Flex, useDisclosure } from "@chakra-ui/react";

import { DicesSection, Characters, CharacterSheetModal, RoomHeader } from "../../components/layout/room";
import { Loading } from "../../components/common/Loading";
import { useLoding } from "../../hooks/useLoding";
import SocketService from '../../services/socketService';
import roomService from '../../services/roomService';
import { DicesProvider } from '../../contexts/DicesContext';
import { AuthContext } from '../../contexts/auth';

export default function Room({ roomId }){
  const router = useRouter()
  const { isLoading } = useLoding()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if(!SocketService.socket){
      // SocketService.connect("https://drakest-back-end.herokuapp.com/").catch((err) => { error: err })
      SocketService.connect("http://localhost:8080").catch((err) => { error: err })
      
      const isAbleToJoinRoom = roomService.joinGameRoomRequest(SocketService.socket, roomId)

      if(isAbleToJoinRoom) {
        router.push(`/room/${roomId}`)
      } else {
        router.push('/')
      }
    }
  }, [])
  
  if(router.isFallback || isLoading){    
    return <Loading />;
  }

  return(
    <DicesProvider roomId={roomId}>
      <Head>
        <title>Room-{roomId} | Drakest</title>
      </Head>
      
      <CharacterSheetModal
        isOpen={isOpen} 
        onRequestClose={onClose}
      />

      <Flex w="100vw" h="100vh" flexDir="column">
        <RoomHeader roomId={roomId} />

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
    </DicesProvider>
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

  return {
    props: {
      roomId: slug
    }
  }
}