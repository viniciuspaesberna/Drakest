import { Icon, useDisclosure } from "@chakra-ui/react";
import { useCallback } from "react";

import { HiTrash } from "react-icons/hi"
import { api } from "../../../services/api";
import { ConfirmModal } from "../ConfirmModal";

interface DeleteButtonProps{
  characterId: string
}

export function DeleteButton({
  characterId
}: DeleteButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const deleteCharacter = useCallback(async () => {
    await api.delete("/characters", {
      data: {
        id: characterId
      }
    })

    onClose()
  }, [])

  return (
    <>
      <Icon
        as={HiTrash}
        w="6"
        h="6"
        onClick={() => onOpen()}
        _hover={{
          transform: "scale(1.1)",
          cursor: 'pointer'
        }}
      />

      <ConfirmModal 
        isOpen={isOpen}
        onClose={onClose}
        text="Realmente deseja EXCLUIR esse personagem?"
        action={deleteCharacter}
      />
    </>
  )
}