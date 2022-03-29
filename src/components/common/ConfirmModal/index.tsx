import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalOverlay, 
  Text, 
  ModalBody, 
  ModalFooter, 
  Button,
  HStack 
} from "@chakra-ui/react";

interface ConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  text: string
  action: () => void
  isLoading: boolean
}

export function ConfirmModal({
  isOpen,
  onClose,
  text,
  action,
  isLoading
}: ConfirmModalProps) {

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose} 
    >
      <ModalOverlay bg="rgba(0, 0, 0, 0.6)" />
      <ModalContent
        bg="gray.800"
      >
        <ModalHeader
          borderBottom="1px solid #616480"
        >
          <Text
            textTransform="uppercase"
            textAlign="center"
          >
            Confirmação
          </Text>
        </ModalHeader>

        <ModalBody>
          <Text
            textAlign="center"
          >
            {text}
          </Text>
        </ModalBody>

        <ModalFooter>
          <HStack>
            <Button
              onClick={action}
              colorScheme="green"
              isLoading={isLoading}
            >
              OK
            </Button>

            <Button
              onClick={onClose}
              colorScheme="red"
            >
              Cancelar
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}