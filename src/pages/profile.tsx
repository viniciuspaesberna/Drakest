import Head from "next/head";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import { useDisclosure } from "@chakra-ui/react";

import { Flex, Text, Divider } from "@chakra-ui/react";

import { ProfileHeader, ProfileAside, CharacterSection } from "../components/layout/profile";
import { CreateCharacterModal, Loading } from "../components/common";
import { useLoding } from "../hooks/useLoding";

export default function Profile({ user }){
  const { isLoading } = useLoding()
  const { isOpen, onOpen, onClose } = useDisclosure()

  if(isLoading){    
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{user.name} | Drakest</title>
      </Head>

      <CreateCharacterModal 
        isOpen={isOpen}
        onClose={onClose}
      />

      <ProfileHeader user={user} />

      <Flex 
        as="main"
        maxW="1360px"
        minH="100vh"
        w="100%"
        m="auto"
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
            <CharacterSection onOpen={onOpen} user={user} />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
} 

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })   

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
      user: session.user
    }
  }
}