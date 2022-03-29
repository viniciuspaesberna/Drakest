import React from 'react';
import { CgClose } from 'react-icons/cg';
import { FiSave } from 'react-icons/fi';

import { IconButton, Heading as ChakraHeading, Flex } from '@chakra-ui/react';

interface HeadingProps{
  onRequestClose: () => void,
  isLoading:boolean
}

function Heading({onRequestClose, isLoading}: HeadingProps){
  return (
    <ChakraHeading
      display="flex"
      justifyContent="flex-end"      
      mb="6"
      color="gray.900"
      position="relative"
    >
      <Flex 
        align="center" 
        justify="space-between" 
        w="100px"
        position="fixed"
        zIndex="5"
      >
        <IconButton
          type="submit"
          colorScheme="yellow"
          _focus={{
            outline: "none"
          }}
          aria-label="Salvar"
          icon={<FiSave />}
          isLoading={isLoading}
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