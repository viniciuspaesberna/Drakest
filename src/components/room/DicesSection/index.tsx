import { Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { DicesContext } from "../../../contexts/DicesContext";
import { SectionHeading } from "../../geral/section/SectionHeading";
import { CustomDices } from "./CustomDices";
import { Dices } from "./Dices";

export function DicesSection(){
  const { dicesValues } = useContext(DicesContext)

  return (
    <Flex 
      as="section"
      flexDir="column"
      w="100%"
      h="fit-content"
    >
      <SectionHeading name="Dados" />
      
      <Flex w="100%">
        <Flex
          w="200px"
          h="200px"
          mx="1rem"
          bgColor="gray.700"
          borderRadius="lg"
          align="center"
          justify="center"
          wrap="wrap"
          overflowY="auto"
          boxShadow="inset -2px -2px 10px #181b23"
        >
          {dicesValues?.map((number, index) => (  
            <Text
              key={index}
              px="2"
              mx="1"
              fontWeight="500"
              fontSize="2xl"
              border="2px solid"
              borderRadius="lg"
              borderColor="gray.900"
            >
              {number}
            </Text> 
          ))}
        </Flex>

        <Flex flexDir="column" maxW="50%">
          <CustomDices />

          <Dices />
        </Flex>
      </Flex>
    </Flex> 
  )
}