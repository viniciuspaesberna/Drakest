import { 
  Button, 
  IconButton, 
  Modal, 
  ModalBody, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  SimpleGrid, 
  Spinner, 
  Text 
} from "@chakra-ui/react";
import { useContext } from "react";
import { CgClose } from "react-icons/cg";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../contexts/auth";
import { api } from "../../../../services/api";
import { CharacterCard } from "../../../common/CharacterCard";

interface CharacterSelectionModalProps {
  onClose: () => void
  isOpen: boolean
}

export function CharacterSelectionModal({
  onClose,
  isOpen,
}: CharacterSelectionModalProps) {
  const { user } = useContext(AuthContext)
  const { isLoading, isError, data, error, isFetching } = useQuery('characters', async () => {
    return await api.get<any>('characters', {
      params: {
        email: user.email
      }, 
    })
  })

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose} 
    >
      <ModalOverlay bg="rgba(0, 0, 0, 0.6)" />
      <ModalContent
        bg="gray.800"
        maxW="60%"
      >
        <ModalHeader
          display="flex"
        >
          <Text
            textAlign="center"
            w="100%"
          >
            Selecione o pesonagem com que deseja jogar.
          </Text>
          <IconButton
            onClick={onClose}
            colorScheme="yellow"
            _focus={{
              outline: "none"
            }}
            aria-label="Fechar"
            icon={<CgClose />}
          />
        </ModalHeader>

        <ModalBody>
          
          <SimpleGrid
            templateColumns="1fr 1fr 1fr"
            w="100%"
            position="relative"
          >
            {isLoading && 
              <Spinner 
                position="absolute"
                right="50%"
                w="10"
                h="10"
              />
            }
            {
              data?.data.characters.map((character: any) => (
                <CharacterCard
                  key={character.data.id}
                  characterId={character.data.id}
                  character={character.data.characterSheet}
                />
              ))
            }
          </SimpleGrid>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="green"
          >
            Selecionar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}