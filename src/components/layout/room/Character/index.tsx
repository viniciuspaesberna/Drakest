import { VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { RoomContext } from "../../../../contexts/RoomContext";
import { CharacterDetails } from "./CharacterDetails";
import { SelectCharacterButton } from "./SelectCharacterButton";

interface CharactersProps{
  openCharacterSheet: () => void
}

export function Characters({ 
  openCharacterSheet, 
}: CharactersProps){
  const { selectedCharacter } = useContext(RoomContext)

  return(
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
        <SelectCharacterButton />
      }
      <CharacterDetails 
        openCharacterSheet={openCharacterSheet}
      />
      <CharacterDetails 
        openCharacterSheet={openCharacterSheet}
      />
      <CharacterDetails 
        openCharacterSheet={openCharacterSheet}
      />
    </VStack>
  )
}