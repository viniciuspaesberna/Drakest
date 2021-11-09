import { Flex, Stack, Text } from "@chakra-ui/react";
import { Scope } from "@unform/core";
import { CreateCharacterModalInput } from "../CreateCharacterInput";

interface DiceInputProps{
  name: string
}

export function DiceInput({ name }: DiceInputProps){
  return (
    <Flex>
      <Scope path={`${name}Dices`}>
        <Stack direction="row" justify="center" align="center">
          <CreateCharacterModalInput
            name={`${name}DiceAmount`}
            textAlign="center"
            bgColor="gray.700"
          />
          
          <Text fontSize="3xl" color="" fontWeight="500">D</Text>
          
          <CreateCharacterModalInput
            name={`${name}DiceSize`} 
            textAlign="center"
            bgColor="gray.700"
          />
        </Stack>
      </Scope>
    </Flex>
  )
}