import { Stack } from "@chakra-ui/react";
import { Scope } from "@unform/core";
import { CreateCharacterTextarea } from "../CharacterTextarea";

export function PersonalitySection(){
  return (
    <Scope path="personality">
      <Stack
        spacing="2"
        w="100%"
      >
        <CreateCharacterTextarea
          name="personalityTraits"
          placeholder="Traços de Personalidade"
          h="12%"
        />

        <CreateCharacterTextarea 
          name="ideals"
          placeholder="Ideais"
          h="12%"
        />

        <CreateCharacterTextarea 
          name="bonds"
          placeholder="Vínculos"
          h="12%"
        />
        
        <CreateCharacterTextarea 
          name="flaws"
          placeholder="Fraquesas"
          h="12%"
        />

        <CreateCharacterTextarea 
          name="characteristicsAndTalents"
          placeholder="Caracteristicas e talentos"
          flex="1"
        />
      </Stack>
    </Scope>
  )
}