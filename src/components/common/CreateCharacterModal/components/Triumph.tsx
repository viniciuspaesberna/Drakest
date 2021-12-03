import { CreateCharacterTextarea } from "../CreateCharacterTextarea";

import { Stack, Flex, Text } from "@chakra-ui/react";
import { Scope } from "@unform/core";
import { CreateCharacterFileInput } from "../CreateCharacterFileInput";

export function Triumph(){
  return (
    <Scope path="triumph">

    <Stack
      direction="row"
      spacing="4"
      h="30rem"
    > 
      <Flex
        position="relative"
        bg="gray.900"
        rounded="md"
        w="40%"
      >
        <Flex
          flexDir="column"
          position="absolute"
          top="5px"
          right="10px"
          w="14rem"
          height="1.5rem"
          zIndex="1"
          transition="height 700ms"
          _hover={{
            height: "20rem"
          }}
          bgColor="gray.500"
          color="gray.900"
          rounded="md"
          overflow="hidden"
        >
          <Text
            fontSize="xl"
            color="gray.900"
            textAlign="center"
            mt="-1"
          >
            Imagem
          </Text>

          <CreateCharacterFileInput
            name="orgImage"            
          />
        </Flex>
      
        <CreateCharacterTextarea 
          name="alliesAndOrgs"
          placeholder="Aliados e Organizações"
          flex="1"
        />
      </Flex>
      
      <CreateCharacterTextarea 
        name="treasure"
        placeholder="Tesouros"
        w="30%"
      />

      <CreateCharacterTextarea 
        name="characteristicsAndTalentsAcquired"
        placeholder="Caracteristicas e Talentos adquiridos"
        w="30%"
      />
    </Stack>
    </Scope>
  )
}