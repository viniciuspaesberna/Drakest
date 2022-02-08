import { Scope } from "@unform/core";

import { SimpleGrid } from "@chakra-ui/react";

import { CreateCharacterModalInput } from "../CharacterInput";

export function AppearenceGrid(){
  return (
    <SimpleGrid
      templateColumns="1fr 1fr 1fr"
      spacing="4"
      w="55%"
      my="auto"
    >
      <Scope path="appearence">
        <CreateCharacterModalInput name="age" placeholder="Idade" />
        <CreateCharacterModalInput name="height" placeholder="Altura" />
        <CreateCharacterModalInput name="weight" placeholder="Peso" />
        <CreateCharacterModalInput name="eyesColor" placeholder="Cor dos olhos" />
        <CreateCharacterModalInput name="skinColor" placeholder="Cor da pele" />
        <CreateCharacterModalInput name="hairColor" placeholder="Cor do cabelo" />
      </Scope>
    </SimpleGrid>
  )
}