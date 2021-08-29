import { Flex } from '@chakra-ui/react';
import React from 'react';
import LoginSection from './LoginSection';
import Logo from './Logo';

export function HomeHeader() {
  return (
    <Flex
      w="100%"
      maxW="1120"
      mx="auto"
      h="15vh"
      align="center"
      p="6"
    >
      <Logo />

      <Flex ml="auto">
        <LoginSection />
      </Flex>
    </Flex>
  );
}
