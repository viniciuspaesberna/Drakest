import { Avatar, Flex, Text } from "@chakra-ui/react";

interface CharacterListItemProps{
  image: string
  name: string
}

export function CharacterListItem({ image, name }: CharacterListItemProps){
  return (
    <Flex
      display="flex"
      flexDir="column"
      align="center"
      bg="gray.700"
      rounded="md"
    >
      <Avatar src={image} size="xl" mx="auto" my="4" />

      <Flex
        w="100%"
        flexDir="column"
      >
        <Text
          mx="auto"
          fontSize="large"
          fontWeight="bold"
        >
          {name}
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