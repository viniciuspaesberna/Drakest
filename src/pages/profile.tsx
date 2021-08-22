import Head from "next/head";
import { getSession } from "next-auth/client";
import { Flex, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import { AsideProfile } from "../components/layout/profile/aside";
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
        <title>{user.name} profile | Drakest</title>
      </Head>

      <Flex as="main">
        <AsideProfile />

        <Text>
          {user.name}
        </Text>
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