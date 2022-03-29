import { useContext, useState } from "react";
import { useQueryClient } from "react-query";

import { AuthContext } from "../../../contexts/auth";
import { api } from "../../../services/api";

import { CharacterModal } from "../CharacterModal";

interface CreateCharacterModalProps{
  isOpen: boolean
  onClose: () => void
}

export function CreateCharacterModal({
  isOpen,
  onClose,
}: CreateCharacterModalProps){
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useContext(AuthContext)
  const queryClient = useQueryClient()

  async function handleSubmit(data: CharacterSheet) {
    setIsLoading(true)
    await api.post('characters', {
      data: {
        user,
        characterSheet: data
      }
    })

    await queryClient.invalidateQueries(["characters"])
    setIsLoading(false)
    onClose()
  }

  function customClose(){
    const isAccept = confirm("Ao fechar você perderá todos os dados, deseja fechar?")

    if (isAccept) {
      onClose()
    }
  }

  return (
    <CharacterModal 
      isOpen={isOpen}
      onClose={customClose}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    />
  )
}