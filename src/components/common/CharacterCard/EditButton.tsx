import { Icon, useDisclosure } from "@chakra-ui/react";

import { HiPencil } from "react-icons/hi"
import { EditCharacterModal } from "../EditCharacterModal";

interface EditButtonProps{
  character: CharacterSheet
  characterId: string
}

export function EditButton({
  character,
  characterId
}: EditButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Icon
        as={HiPencil}
        w="6"
        h="6"
        onClick={() => onOpen()}
        _hover={{
          transform: "scale(1.1)",
          cursor: 'pointer'
        }}
      />

      <EditCharacterModal 
        isOpen={isOpen}
        onClose={onClose}
        initialData={character}
        characterId={characterId}
      />
    </>
  )
}