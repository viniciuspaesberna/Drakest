import { useDisclosure } from "@chakra-ui/react";
import { useContext } from "react";
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
  const { user } = useContext(AuthContext)
  const queryClient = useQueryClient()

  async function handleSubmit(data: CharacterSheet) {
    await api.post('characters', {
      data: {
        user,
        characterSheet: data
      }
    })

    await queryClient.invalidateQueries(["characters"])
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
<<<<<<< HEAD
      onClose={customClose}
=======
      close={customClose}
>>>>>>> a5d9b9eb52d4b96dfa733593e2ac58750753f644
      handleSubmit={handleSubmit}
    />
  )
}