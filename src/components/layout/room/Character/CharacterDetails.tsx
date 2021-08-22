import { Flex, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsFileText } from "react-icons/bs";
import { Input } from "../../../common";

interface CharacterDatailsProps{
  openCharacterSheet: () => void
}

export function CharacterDetails({openCharacterSheet}: CharacterDatailsProps){
  const [hp, setHp] = useState('')

  return (
    <Flex
      align="center"
      justify="space-between"
      w="100%"
      mr="4"
    >
      <Flex ml="4" flex="1" flexDir="column" >
        <Text fontSize="xl" ml="2">HaloSara121</Text>
        <Input
          name="hp"
          type="number"
          placeholder="hp"
          _placeholder={{color:"gray.600"}}
          w="10" 
          value={hp}
          onChange={e => setHp(e.target.value)}
        />
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
        ml="auto"
      />
    </Flex>
  )
}