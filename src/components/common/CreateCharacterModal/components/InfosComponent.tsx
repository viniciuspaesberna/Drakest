import React, { useContext } from "react";
import { Scope } from "@unform/core";

import { Flex, SimpleGrid } from "@chakra-ui/react";

import { CreateCharacterModalInput } from "../CreateCharacterInput";
import { CurrentCharacterSheetContext } from "../../../../contexts/CurrentCharacterSheetContext";

export function InfosComponent(){
  return (
    <Flex
      w="100%"
    >
      <Scope path="infos">
        <CreateCharacterModalInput
          name="name" 
          placeholder="Nome"
          h="14"
          mr="4"
          maxW="40%"
          fontSize="4xl"
          textAlign="center"
          maxLength={40}
          isRequired
        />

        <SimpleGrid
          templateColumns="1fr 1fr 1fr"
          spacing="4"
          w="100%"
        >
          <CreateCharacterModalInput name="class" placeholder="Classe" isRequired/>
          <CreateCharacterModalInput name="background" placeholder="Antecedentes" isRequired/>
          <CreateCharacterModalInput name="playerName" placeholder="Nome do Jogador" isRequired/>
          <CreateCharacterModalInput name="race" placeholder="Raça" isRequired/>
          <CreateCharacterModalInput name="alignment" placeholder="Alinhamento" isRequired/>
          <CreateCharacterModalInput name="experiencePoints" placeholder="Pontos de experiência" isRequired/>
        </SimpleGrid>
      </Scope>
    </Flex>
  )
}