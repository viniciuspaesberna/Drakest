import { Box, Image } from '@chakra-ui/react';
import ReactModal from 'react-modal';
import Footer from './Footer';
import Heading from './Heading';

// import { Container } from './styles';

interface CharacterSheetModalProps{
  isOpen: boolean
  onRequestClose: () => void
}

export function CharacterSheetModal({
  isOpen,
  onRequestClose,
}: CharacterSheetModalProps) {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          inset: "3rem 0",
          width: "50vw",
        },
        overlay: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Heading name="HaloSara" onRequestClose={onRequestClose} />

      <Box>
        <Image src="https://i.ibb.co/jT2QBnt/ficha-de-personagem-dd-5e.jpg"/>
      </Box>

      <Footer />
    </ReactModal>
  );
}