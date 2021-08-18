import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { FormEvent, useRef } from "react";
import { DicesContext } from "../../../contexts/DicesContext";
import { Input } from "../../geral/Form/Input";


export function CustomDices(){
  const { handleRollDices } = useContext(DicesContext)

  const diceAmountRef = useRef<HTMLInputElement>(null)
  const diceSizeRef = useRef<HTMLInputElement>(null)
  const amplifierRef = useRef<HTMLInputElement>(null)

  function handleCustonDiceFormSubmit(event: FormEvent){
    event.preventDefault()

    if(Number(diceSizeRef.current.value) === 0){
      return
    }

    handleRollDices(Number(diceSizeRef.current.value), Number(diceAmountRef.current.value), Number(amplifierRef.current.value))
  }

  return (
    <Flex
      align="center"
      flexDir="column"
      as="form"
      onSubmit={handleCustonDiceFormSubmit}
    >
      <Flex>
        <Stack direction="row" justify="center" align="center">
          <Input
            name="diceAmount" 
            w="2rem"
            type="number"
            max="100"
            fontWeight="500"
            border=" 1px solid"
            borderColor="gray.500"
            isRequired
            ref={diceAmountRef}
          />
          
          <Text fontSize="3xl" color="" fontWeight="500">D</Text>
          
          <Input
            name="diceSize" 
            w="2.2rem"
            type="number"
            max="100"
            fontWeight="500"
            border=" 1px solid"
            borderColor="gray.500"
            isRequired
            ref={diceSizeRef}
          />
          
          <Text fontSize="3xl" color="" fontWeight="500">+</Text>

          <Input
            name="amplifier" 
            w="2rem"
            type="number"
            max="100"
            fontWeight="500"
            border=" 1px solid"
            borderColor="gray.500"
            ref={amplifierRef}
          />
        </Stack>

      </Flex>
      <Button 
        type="submit"
        
        m="2"
        p="2"
        
        fontSize="md"
        colorScheme="yellow"
      >
        Rolar
      </Button>
    </Flex>
  )
}