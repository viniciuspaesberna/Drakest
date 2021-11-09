import { Scope } from "@unform/core";
import { SpellsList } from "./SpellsList";

import { SimpleGrid, Stack } from "@chakra-ui/react";
import { CreateCharacterModalInput } from "../../CreateCharacterInput";

export function SpellsSection(){
  return (
    <Scope path="spells">
      <Stack>
        <Stack
          alignSelf="center"
          bg="gray.800"
          direction="row"
          spacing="4"
          justify="space-between"
          p="2"
        >
          <CreateCharacterModalInput
            name="conjurationAttribute"
            placeholder="Atributo de conjuração"
            w="30%"
            height="4rem"
            textAlign="center"
            bgColor="gray.700"
          />

          <CreateCharacterModalInput 
            name="spellsCooldown"
            placeholder="Tempo de recarga de mágias"
            w="30%"
            height="4rem"
            textAlign="center"
            bgColor="gray.700"
          />

          <CreateCharacterModalInput 
            name="spellsModifier"
            placeholder="Modificador de ataque mágico"
            w="30%"
            height="4rem"
            textAlign="center"
            bgColor="gray.700"
          />

        </Stack>

        <SimpleGrid 
          templateColumns="1fr 1fr 1fr 1fr"
          spacing="4"
        >
            <SpellsList level="0" label="Truques" />
            <SpellsList level="1" />
            <SpellsList level="2" />
            <SpellsList level="3" />
            <SpellsList level="4" />
            <SpellsList level="5" />
            <SpellsList level="6" />
            <SpellsList level="7" />
            <SpellsList level="8" />
            <SpellsList level="9" />
        </SimpleGrid>
      </Stack>
    </Scope>
  )
}