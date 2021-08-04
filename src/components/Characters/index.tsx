import { Avatar, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { BsFileText } from 'react-icons/bs'
import { Input } from "../Form/Input";

interface CharactersProps{
  openCharacterSheet: () => void
}

export function Characters({ openCharacterSheet }: CharactersProps){
  return(
    <Stack
      spacing="1rem"
      w="100%"
      >
      <Flex
        w="100%"
        align="center"
        bg="gray.900"
        p="6"
        borderRadius="2rem 0 0 2rem"
      >
        <Flex ml="4" flex="1" flexDir="column">
          <Text fontSize="xl" ml="2">HaloSara121</Text>
          <Input name="hp" type="number" placeholder="hp" _placeholder={{color:"gray.600"}} w="10" />
        </Flex>
          <IconButton
            onClick={openCharacterSheet}
            colorScheme="yellow"
            aria-label="Ficha do personagem"
            icon={<BsFileText size="24"/>}
            _focus={{
              outline: "none"
            }}
            size="md"
            mr="4"
          />
        <Avatar size="lg" src="https://github.com/HaloSara121.png" alt="HaloSara"/>
      </Flex>
    </Stack>
  )
}