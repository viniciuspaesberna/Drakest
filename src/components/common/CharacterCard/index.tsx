import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";

interface CharacterCardProps{
  character: CharacterSheet
}

export function CharacterCard({
  character
}: CharacterCardProps) {
  if (!character) {
    return (
      <Text>loading...</Text>
    )
  }

  useEffect(() => {
    // console.log(character.infos.name)
  }, [])

  return (
    <Flex
      display="flex"
      flexDir="column"
      align="center"
      bg="gray.700"
      rounded="md"
    >
      <Avatar src="https://github.com/HaloSara121.png" size="xl" mx="auto" my="4" />

      <Flex
        w="100%"
        flexDir="column"
      >
        <Text
          mx="auto"
          fontSize="large"
          fontWeight="bold"
        >
          {character.infos?.name}
        </Text>

        <Flex>
          <Text
            as="span"
            m="2"
          >
            Torre Negra
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}