import { IconButton, Heading as ChakraHeading } from '@chakra-ui/react';
import React from 'react';
import { CgClose } from 'react-icons/cg';

// import { Container } from './styles';

interface HeadingProps{
  name: string
  onRequestClose: () => void
}

function Heading({name, onRequestClose}: HeadingProps){
  return (
    <ChakraHeading
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color="gray.900"
    >
      {name}
      <IconButton
        onClick={onRequestClose}
        colorScheme="yellow"
        _focus={{
          outline: "none"
        }}
        aria-label="Fechar"
        icon={<CgClose/>}
      />
    </ChakraHeading>
  );
}

export default Heading;