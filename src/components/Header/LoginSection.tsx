import { Link, Stack } from '@chakra-ui/react';
import React from 'react';

// import { Container } from './styles';

const LoginSection: React.FC = () => {
  return (
    <Stack direction="row" spacing="8">
      <Link 
        fontSize="2xl"
        p="4"
        borderRadius="full"
        _hover={{
        color: "yellow.400",
        bg: "gray.900"
      }}>
        Cadastrar-se
      </Link>
      <Link 
        fontSize="2xl"
        p="4"
        borderRadius="full"
        _hover={{
        color: "yellow.400",
        bg: "gray.900"
      }}>
        Login
      </Link>
    </Stack>
  );
}

export default LoginSection;