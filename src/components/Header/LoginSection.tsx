import { Avatar, Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc'
import { CgClose } from 'react-icons/cg';
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

// import { Container } from './styles';

function LoginSection() {
  const [session] = useSession()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return session ? (
    <Flex align="center">
      <Link href="/profile">
        <Avatar
          size="md"
          mr="2" 
          _hover={{
            cursor: 'pointer'
          }}
          src={session.user.image}
          name={session.user.name}
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
            {session && <Text mx="2">{session.user.name}</Text>}
            <CgClose size="20" />
          </Flex>
        </Button>
      )}
    </Flex>
  ) : (
    <Button
      onClick={() => signIn('google')}
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
  )
}

export default LoginSection;