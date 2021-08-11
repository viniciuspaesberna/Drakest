import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { DicesContext } from "../../contexts/DicesContext";

export function Dices(){
  const { handleRollDices } = useContext(DicesContext)

  return (
    <Flex wrap="wrap" gap="2" align="center" justify="center" mt="auto">
      <Button
        m="1"
        colorScheme="blue"
        p="2"
        onClick={() => handleRollDices(2, 1)}
      >
        D2
      </Button>
      <Button
        m="1"
        colorScheme="blue"
        p="2"
        onClick={() => handleRollDices(4, 1)}
      >
        D4
      </Button>
      <Button
        m="1"
        colorScheme="blue"
        p="2"
        onClick={() => handleRollDices(6, 1)}
      >
        D6
      </Button>
      <Button
        m="1"
        colorScheme="blue"
        p="2"
        onClick={() => handleRollDices(8, 1)}
      >
        D8
      </Button>
      <Button
        m="1"
        colorScheme="blue"
        p="2"
        onClick={() => handleRollDices(10, 1)}
      >
        D10
      </Button>
      <Button
        m="1"
        colorScheme="blue"
        p="2"
        onClick={() => handleRollDices(12, 1)}
      >
        D12
      </Button>
      <Button
        m="1"
        colorScheme="blue"
        p="2"
        onClick={() => handleRollDices(20, 1)}
      >
        D20
      </Button>
    </Flex>
  )
}