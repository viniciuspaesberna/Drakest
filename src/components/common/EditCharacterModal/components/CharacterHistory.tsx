import { Flex, Text, Stack, CircularProgress } from "@chakra-ui/react";
import { Scope } from "@unform/core";
import { CreateCharacterTextarea } from "../CharacterTextarea";
import { ImagePreview } from "./ImagePreview";

export function CharacterHistory(){
  return (
    <Stack
      w="100%"
      spacing="4"
      direction="row"
    >
      <Flex
        w="30%"
        h="30rem"
        flexDir="column"
        bg="gray.800"
        rounded="md"
      >
        <Text
          fontSize="2xl"
          textAlign="center"
        >
          Avatar
        </Text>
        <ImagePreview />
      </Flex>

      <Scope path="infos">
        <CreateCharacterTextarea 
          name="history"
          placeholder="Historia do personagem"
          flex="1"
          h="30rem"
        />
      </Scope>
    </Stack>
  )
}