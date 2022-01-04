import { Flex, IconButton, Text, Avatar} from "@chakra-ui/react";
import { useState } from "react";
import { BsFileText } from "react-icons/bs";
import { Input } from "../../../common";

interface CharacterDatailsProps{
  openCharacterSheet: () => void
}

export function CharacterDetails({openCharacterSheet}: CharacterDatailsProps){
  const [detailsVisibility, setDetailsVisibility] = useState(false)
  const [hp, setHp] = useState('')

  return (
    <Flex
      w="26%"
      align="center"
      bg="gray.900"
      justify="flex-end"
      ml="auto"
      py="6"
      px="4"
      borderRadius="4rem 0 0 4rem"
      overflow="hidden"
      transition="width 1s ease-out"
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
            onClick={openCharacterSheet}
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
    </Flex>
  )
}