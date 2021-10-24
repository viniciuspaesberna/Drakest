import { Button, Flex, Icon, Link, Image } from "@chakra-ui/react";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

export function ProfileHeader({user}){
  const router = useRouter()

  return (
    <Flex 
      as="header"
      flexDir="column"
      maxW="1120px"
      h="20vh"
      m="auto"
    >
      <Flex w="100%" justify="space-between" align="flex-start">
        <Link   
          href="/"
          _focus={{
            outline: "none"
          }}
        >
          <Icon
            as={BiArrowBack}
            w="8"
            h="8"
            my="2"
            mx="4"
            _hover={{
              transform: "scale(1.1)",
              cursor: 'pointer'
            }}
          />
        </Link>

        <Button 
          my="2"
          mx="4" 
          colorScheme="blackAlpha"
          _focus={{
            outline: "none"
          }}
          onClick={() => {
            signOut()
            router.push('/')
          }}
        >
          Deslogar
        </Button>
      </Flex>
          
      <Image
          src={user.image}
          w="40"
          m="auto"
          mb="-5%"
          rounded="full"
        />
    </Flex>
  )
}