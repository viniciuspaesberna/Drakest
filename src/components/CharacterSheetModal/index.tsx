import React from 'react';
import { Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, ModalProps } from "@chakra-ui/react";

// import { Container } from './styles';

const CharacterSheetModal: React.FC = ({  ...rest }: ModalProps) => {
  return (
    <Modal {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Image src="https://i.ibb.co/s2dG4yw/ficha-de-personagem-dd-5e.jpgs" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default CharacterSheetModal;