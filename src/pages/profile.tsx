import { useContext } from "react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import Head from "next/head";
import { Flex, Text, Divider, useToast } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import { ProfileHeader, ProfileAside, CharacterSection } from "../components/layout/profile";
import { CreateCharacterModal, Loading } from "../components/common";
import { useLoding } from "../hooks/useLoding";
import { AuthContext } from "../contexts/auth";

export default function Profile(){
  const { user } = useContext(AuthContext)
  const router = useRouter()
  const toast = useToast()
  const { isLoading } = useLoding()
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  if(isLoading){    
    return <Loading />;
  }

  function onRequestClose() {
    const isAccept = confirm("Ao fechar você perderá todos os dados, deseja fechar?")

    if (isAccept) {
      onClose()
    }
  }


  return (
    <>
      <Head>
        <title>{user.name} | Drakest</title>
      </Head>

      <CreateCharacterModal 
        isOpen={isOpen}
        onClose={onClose}
        close={onClose}
      />

      <ProfileHeader user={user} />

      <Flex 
        as="main"
        maxW="1120px"
        h="100%"
        w="100%"
        m="auto"
        mb="8"
        bg="gray.700"
        flexDir="column"
        rounded="md"
      >
        <Text
          mx="auto"
          mt="5rem"
          mb=".2rem"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          {user.name}
        </Text>

        <Divider borderColor="gray.500" boxShadow="1px 1px 2px #d1d2dc"/>

        <Flex
          flex="1"
          mt="1rem"
          mx="6"
        >
          <ProfileAside />

          <Flex
            w="100%"
            color="white"
          >
            <CharacterSection onOpen={onOpen} />
          </Flex>
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
      session
    }
  }
}