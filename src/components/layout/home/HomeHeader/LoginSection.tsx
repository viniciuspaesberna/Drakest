import { useContext, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { CgClose } from 'react-icons/cg';
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/client';

import { Avatar, Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import { AuthContext } from '../../../../contexts/auth';
import SocketService from '../../../../services/socketService';


function LoginSection() {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if(user){
      SocketService.connect(process.env.SOCKETIO_URL).catch((err) => { error: err })
    }
  }, [user])

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return user ? (
    <Flex align="center">
      <Link href="/profile">
        <Avatar
          size="md"
          mr="2" 
          _hover={{
            cursor: 'pointer'
          }}
          src={user.image}
          name={user.name}
        />
      </Link>
      { isWideVersion && (
        <Button
          onClick={() => signOut()}
          p={0}
          bg="whiteAlpha.900"
          _hover={{
            bgColor: 'whiteAlpha.600',
          }}
          color="gray.900"
        >
          <Flex align="center" p="2">
            <Text mx="2">{user.name}</Text>
            <CgClose size="20" />
          </Flex>
        </Button>
      )}
    </Flex>
  ) : (
    <Flex alignItems="center" >  
      <Button
        onClick={() => signIn("google")}
        p={0}
        bg="whiteAlpha.900"
        _hover={{
          bgColor: 'whiteAlpha.600',
        }}
        color="gray.900"
      >
        <Flex align="center" p="2">
          <FcGoogle size="28" />
        </Flex>
      </Button>
    </Flex>
  )
}

export default LoginSection;