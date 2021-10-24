import Head from "next/head";
import { getSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import { Flex, Text, Divider } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import { ProfileHeader, ProfileAside, CharacterSection } from "../components/layout/profile";
import { CreateCharacterModal, Loading } from "../components/common";
import { useLoding } from "../hooks/useLoding";

export default function Profile({user}){
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

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  const session = await getSession({req}) 

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
      user
    }
  }
}