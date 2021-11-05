import { Stack } from "@chakra-ui/react";
import { Scope } from "@unform/core";

import { CreateCharacterModalInput } from "../../CreateCharacterModalInput";

interface WeaponInputProps {
  name: string
}

export function WeaponInput({
  name
}: WeaponInputProps){
  return (
    // <Scope path={name}>
      <Stack
        direction="row"
      >
        <CreateCharacterModalInput  
          name={`${name}Name`}
          placeholder="Nome da arma"
          w="60%"
          />
        <CreateCharacterModalInput 
          name={`${name}Amplifiers`} 
          w="20%"
          placeholder="Ex:-1/+2"
          textAlign="center"
          />
        <CreateCharacterModalInput 
          name={`${name}Dices`} 
          w="20%"
          textAlign="center"
          placeholder="Ex:2D4"
        />
      </Stack>
    // </Scope>
  )
}