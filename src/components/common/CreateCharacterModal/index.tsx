import { useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";

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
}){
  const { user } = useContext(AuthContext)

  async function handleSubmit(data: CharacterSheet) {
    await api.post('characters', {
      data: {
        user,
        characterSheet: data
      }
    })

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
      close={onClose}
      handleSubmit={handleSubmit}
    />
  )
}