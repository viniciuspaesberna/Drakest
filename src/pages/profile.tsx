import Head from "next/head";
import { getSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import { Flex, Text,Image } from "@chakra-ui/react";

import { ProfileHeader, ProfileAside } from "../components/layout/profile";
import { Loading } from "../components/common/Loading";
import { useLoding } from "../hooks/useLoding";

export default function Profile({user}){
  const { isLoading } = useLoding()

  if(isLoading){    
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{user.name} | Drakest</title>
      </Head>

      <ProfileHeader />

      <Flex 
        as="main"
        maxW="1120px"
        h="80vh"
        w="100%"
        m="auto"
        bg="gray.900"
        flexDir="column"
        rounded="md"
        position="absolute"
        top="20vh"
        right="50vw"
        transform=" translate(50%)"
      >
        <Image
          src={user.image}
          w="40"
          position="relative"
          top="-10%"
          right="-50%"
          transform=" translate(-50%)"
          rounded="full"
        />

        <Text
          mx="auto"
          mt="-5rem"
          mb=".2rem"
          fontSize="4xl"
        >
          {user.name}
        </Text>

        <Flex
          flex="1"
        >
          <ProfileAside />

          <Flex
            color="white"
          >
            
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