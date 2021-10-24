import React from 'react';
import { CgClose } from 'react-icons/cg';
import { FiSave } from 'react-icons/fi';

import { IconButton, Heading as ChakraHeading, Flex } from '@chakra-ui/react';

interface HeadingProps{
  onRequestClose: () => void
}

function Heading({onRequestClose}: HeadingProps){
  return (
    <ChakraHeading
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      color="gray.900"
      mb="6"
    >
      <Flex align="center" justify="space-between" w="100px">
        <IconButton
          colorScheme="yellow"
          _focus={{
            outline: "none"
          }}
          aria-label="Fechar"
          icon={<FiSave />}
          // _hover={{
          //   filter: "brightness(.2)"
          // }}
        />
        
        <IconButton
          onClick={onRequestClose}
          colorScheme="yellow"
          _focus={{
            outline: "none"
          }}
          aria-label="Fechar"
          icon={<CgClose/>}
        />
      </Flex>
    </ChakraHeading>
  );
}

export default Heading;