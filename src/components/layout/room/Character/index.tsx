import { Avatar, Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { CharacterDetails } from "./CharacterDetails";

interface CharactersProps{
  openCharacterSheet: () => void
}

export function Characters({ openCharacterSheet }: CharactersProps){
  const [detailsVisibility, setDetailsVisibility] = useState(false)

  return(
    <Stack
      spacing="1rem"
      direction="column"
      w="100%"
      justify="right"
    >
      <Flex
        w="30%"
        align="center"
        justify="flex-end"
        bg="gray.900"
        ml="auto"
        py="6"
        px="4"
        borderRadius="4rem 0 0 4rem"
        overflow="hidden"
        transition="width 1s"
        onMouseEnter={() => {
          setDetailsVisibility(true)
        }}
        onMouseLeave={() => {
          setDetailsVisibility(false)
        }}
        _hover={{
          w: '100%',
        }}
      >
        { detailsVisibility &&  
          <CharacterDetails
            openCharacterSheet={openCharacterSheet}
          />
        }
        <Avatar
          size="lg"
          src="https://github.com/HaloSara121.png"
          alt="HaloSara"
          title="HaloSara121"
        />
      </Flex>
    </Stack>
  )
}