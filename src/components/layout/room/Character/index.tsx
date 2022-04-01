import { useDisclosure, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { RoomContext } from "../../../../contexts/RoomContext";
import { CharacterDetails } from "./CharacterDetails";
import { CharacterSelectionModal } from "./CharacterSelectionModal";
import { SelectCharacterButton } from "./SelectCharacterButton";

export function Characters(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { selectedCharacter, characters } = useContext(RoomContext)

  return(
    <>
      <VStack
        spacing="1rem"
        w="25rem"
        h="100%"
        right="0"
        py="2"
        position="absolute"
        zIndex="10"
        display="flex"
        align="flex-end"
        justify="center"
        overflow="auto"
      >
        {!selectedCharacter &&
          <SelectCharacterButton onOpen={onOpen} />
        } 
        { characters.map(character => (
          <CharacterDetails 
            characterId={character.id}
            characterSheet={character.sheet}
          />
        ))}
      </VStack>

      <CharacterSelectionModal 
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  )
}