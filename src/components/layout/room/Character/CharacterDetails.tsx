import { Flex, IconButton, Text, Avatar, useDisclosure} from "@chakra-ui/react";
import { useState } from "react";
import { BsFileText } from "react-icons/bs";
import { Input } from "../../../common";
import { EditCharacterModal } from "../../../common/EditCharacterModal";

interface CharacterDatailsProps{
  characterId: string
  characterSheet: CharacterSheet
}

export function CharacterDetails({
  characterId,
  characterSheet
}: CharacterDatailsProps){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [detailsVisibility, setDetailsVisibility] = useState(false)
  const [hp, setHp] = useState('')


  return (
    <Flex
      w="26%"
      align="center"
      bg="gray.900"
      justify="flex-end"
      ml="auto"
      borderRadius="4rem 0 0 4rem"
      py="6"
      px="4"
      overflow="hidden"
      transition="width .8s ease-out"
      flexShrink={0}
      onMouseEnter={() => {
        setDetailsVisibility(true)
      }}
      onMouseLeave={() => {
        setDetailsVisibility(false)
      }}
      _hover={{
        w: '100%',
      }}
    >
      <Flex
        width="100%"
        mr="1rem"
        transition="opacity .8s ease-in-out"
        opacity={detailsVisibility ? "1" : "0"}
      >
        <Flex
          align="center"
          justify="space-between"
          w="100%"
          mr="4"
        >
          <Flex ml="4" flex="1" flexDir="column" >
            <Text fontSize="xl" ml="2">HaloSara121</Text>
            <Input
              name="hp"
              type="number"
              placeholder="hp"
              _placeholder={{color:"gray.600"}}
              w="10" 
              value={hp}
              onChange={e => setHp(e.target.value)}
            />
          </Flex>

          <IconButton
            onClick={onOpen}
            colorScheme="yellow"
            aria-label="Ficha do personagem"
            icon={<BsFileText size="24"/>}
            _focus={{
              outline: "none"
            }}
            size="md"
            ml="auto"
          />
        </Flex>
      </Flex>

      <Avatar
        size="lg"
        src="https://github.com/HaloSara121.png"
        alt="HaloSara"
        title="HaloSara121"
      />

      <EditCharacterModal
        onClose={onClose}
        isOpen={isOpen}
        characterId={characterId}
        initialData={characterSheet}
      />
    </Flex>
  )
}