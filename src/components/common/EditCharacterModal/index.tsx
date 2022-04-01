import { useDisclosure } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { AuthContext } from "../../../contexts/auth";
import { api } from "../../../services/api";

import { CharacterModal } from "../CharacterModal";

interface EditCharacterModalProps{
  isOpen: boolean
  onClose: () => void
  characterId: string
  initialData: CharacterSheet
}

export function EditCharacterModal({
  isOpen,
  onClose,
  characterId,
  initialData
}: EditCharacterModalProps){
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(data: CharacterSheet) {
    setIsLoading(true)
    await api.put('characters', {
      data: {
        id: characterId,
        newData: data
      }
    })

    setIsLoading(false)
    onClose()
  }

  function customClose(){
    const isAccept = confirm("Ao fechar os dados não serão atualizados, deseja fechar?")

    if (isAccept) {
      onClose()
    }
  }

  return (
    <CharacterModal 
      isOpen={isOpen}
      onClose={customClose}
      handleSubmit={handleSubmit}
      initialData={initialData}
      isLoading={isLoading}
    />
  )
}