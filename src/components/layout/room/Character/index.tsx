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
      right="0"
      bg="blue"
      py="2"
      my="auto"
      position="absolute"
      zIndex="10"
      display="flex"
      align="flex-end"
    >
      <CharacterDetails 
        openCharacterSheet={openCharacterSheet}
      />
    </VStack>
  )
}