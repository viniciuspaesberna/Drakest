import { useEffect, useState } from 'react'
import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

import { Flex, useDisclosure } from "@chakra-ui/react";

import { Aside, Characters, CharacterSheetModal, RoomHeader } from "../../components/layout/room";
import { Loading } from "../../components/common/Loading";
import { useLoding } from "../../hooks/useLoding";
import SocketService from '../../services/socketService';
import roomService from '../../services/roomService';
import { DicesProvider } from '../../contexts/DicesContext';
import { api } from '../../services/api';
import { RoomProvider } from '../../contexts/RoomContext';

export default function Room({ roomId }){
  const router = useRouter()
  const { isLoading } = useLoding()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [asideIsOpen, setAsideIsOpen] = useState(false)
  const [room, setRoom] = useState<Room>()

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

  useEffect(() => {
    const getRoom = async () => {
      const res = await api.get('/room', {
        params: {
          roomId
        }
      })

      console.log(res.data.room)

      setRoom(res.data.room)
    }

    getRoom()
  }, [])
  
  if(router.isFallback || isLoading){    
    return <Loading />;
  }

  return(
    <RoomProvider>
      <DicesProvider roomId={roomId}>
        <Head>
          <title>Room-{roomId} | Drakest</title>
        </Head>
        
        <CharacterSheetModal
          isOpen={isOpen} 
          onRequestClose={onClose}
        />

        <Flex 
          flexDir="column"
          h="100vh"
        >
          <RoomHeader 
            roomId={roomId} 
            toggleAside={setAsideIsOpen} 
            asideIsOpen={asideIsOpen} 
            roomName={room?.name}
          />

          <Flex 
            h="100%"
            py="2"
            px="4"
            position="relative"
          >
            <Aside isOpen={asideIsOpen} />

            <Flex
            >
              {/* <Image src="/images/bg.png"/> */}
            </Flex>

            <Characters />
          </Flex>
        </Flex>
      </DicesProvider>
    </RoomProvider>
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