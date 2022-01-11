import { VStack } from "@chakra-ui/react";
import { CharacterDetails } from "./CharacterDetails";

interface CharactersProps{
  openCharacterSheet: () => void
}

export function Characters({ openCharacterSheet }: CharactersProps){
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
    >
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