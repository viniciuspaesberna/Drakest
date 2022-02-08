import { Stack } from "@chakra-ui/react";
import { CreateCharacterModalInput } from "../../CharacterInput";

export function MoneyList(){
  return (
    <Stack
      direction="row"
      mt="2"
    >
      <CreateCharacterModalInput
        type="number"
        name="pc" 
        placeholder="PC"
        textAlign="center"
      />

      <CreateCharacterModalInput
        type="number" 
        name="pp" 
        placeholder="PP"
        textAlign="center"
      />

      <CreateCharacterModalInput
        type="number" 
        name="pe" 
        placeholder="PE"
        textAlign="center"
      />

      <CreateCharacterModalInput
        type="number" 
        name="po" 
        placeholder="PO"
        textAlign="center"
      />

      <CreateCharacterModalInput
        type="number" 
        name="pl" 
        placeholder="PL"
        textAlign="center"
      />
    </Stack>
  )
}