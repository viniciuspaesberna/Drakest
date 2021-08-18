import Head from "next/head";
import { getSession, useSession } from "next-auth/client";
import { Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { AsideProfile } from "../components/profile/aside";

export default function Profile({user}){
  return (
    <>
      <Head>
        <title>{user.name} profile | Drakest</title>
      </Head>

      <Flex as="main">
        <AsideProfile />
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