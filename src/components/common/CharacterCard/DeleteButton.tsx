import { Icon, useDisclosure } from "@chakra-ui/react";
import { useCallback, useState } from "react";

import { HiTrash } from "react-icons/hi"
import { useQueryClient } from "react-query";
import { api } from "../../../services/api";
import { ConfirmModal } from "../ConfirmModal";

interface DeleteButtonProps{
  characterId: string
}

export function DeleteButton({
  characterId
}: DeleteButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const queryClient = useQueryClient()

  const deleteCharacter = useCallback(async () => {
    setIsLoading(true)
    await api.delete("/characters", {
      data: {
        id: characterId
      },
    })


    await queryClient.invalidateQueries(["characters"])
    setIsLoading(false)
    onClose()
  }, [])

  return (
    <>
      <Icon
        as={HiTrash}
        w="6"
        h="6"
        onClick={() => {
          onOpen()
        }}
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
        isLoading={isLoading}
      />
    </>
  )
}