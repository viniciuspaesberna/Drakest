import { Flex } from "@chakra-ui/react";
import { DicesSection } from "../DicesSection";

export function Aside(){
  return (
    <Flex
      w="30rem"
      h="100%"
      bg="gray.900"
      rounded="3xl" 
      mx="6"
      mb="4"
    >
      <DicesSection />
    </Flex>
  )
}