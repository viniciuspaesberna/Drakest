import { Avatar, Flex, HStack, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { useCallback, useEffect } from "react";

import { HiPencil, HiTrash } from "react-icons/hi"
import { api } from "../../../services/api";
import { EditCharacterModal } from "../EditCharacterModal";

interface CharacterCardProps{
  character: CharacterSheet
  characterId: string
}

export function CharacterCard({
  character,
  characterId
}: CharacterCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  if (!character) {
    return (
      <Text>loading...</Text>
    )
  }

  useEffect(() => {

  }, [])

  const deleteCharacter = useCallback(async () => {
    await api.delete("/characters", {
      data: {
        id: characterId
      }
    })
  }, [])
  
  function onRequestClose() {
    const isAccept = confirm("Ao fechar você perderá todos os dados, deseja fechar?")

    if (isAccept) {
      onClose()
    }
  }

  return (
    <Flex
      display="flex"
      flexDir="column"
      align="center"
      bg="gray.700"
      rounded="md"
    >
      <HStack
        w="100%"
        h="2"
        py="2"
        px="2"
        align="flex-start"
        justify="flex-end"
      >
        <Icon
          as={HiPencil}
          w="6"
          h="6"
          onClick={() => onOpen()}
          _hover={{
            transform: "scale(1.1)",
            cursor: 'pointer'
          }}
        />

        <Icon
          as={HiTrash}
          w="6"
          h="6"
          onClick={() => deleteCharacter()}
          _hover={{
            transform: "scale(1.1)",
            cursor: 'pointer'
          }}
        />
      </HStack>

      <Avatar 
        src="/images/defaultCharacter2.png" 
        size="xl" 
        mx="auto" 
        my="4" 
      />

      <Flex
        w="100%"
        flexDir="column"
      >
        <Text
          mx="auto"
          fontSize="large"
          fontWeight="bold"
        >
          {character.infos.name}
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

      <EditCharacterModal 
        isOpen={isOpen}
        onClose={onRequestClose}
        close={onClose}
        initialData={character}
        characterId={characterId}
      />
    </Flex>
  )
}