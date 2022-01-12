import { useContext, useEffect, useState } from "react";
import { IoIosRefresh } from "react-icons/io"

import { Icon, SimpleGrid, Spinner } from "@chakra-ui/react";

import { Section, SectionHeading } from "../../../common";
import { CharacterListItem } from "./CharacterListItem";
import { AddCharacterButton } from "./AddCharacterButton"
import { api } from "../../../../services/api";
import { AuthContext } from "../../../../contexts/auth";
import { motion } from "framer-motion";

interface CharacterSectionProps{
  onOpen: () => void
}

const rotateVariants = {
  rotate: {
    rotate: [0, 1],
    transition: {
      rotate: {
        duration: .5,
        ease: "easeInOut",
      },
    }
  },
}

export function CharacterSection({
  onOpen
}: CharacterSectionProps){
  const { user } = useContext(AuthContext)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters()
  }, [])

  async function getCharacters(){
    const response = await api.get('characters', {
      params: {
        email: user.email
      }, 
    })

    setCharacters(response.data.characters)
  }

  return (
    <Section
      w="100%"
      flexDir="column"
      mb="1rem"
      bg="gray.800"
      rounded="md"
      position="relative"
    >
      <SectionHeading name="Personagens" mx="auto" />

      <SimpleGrid
        overflow="auto"
        templateColumns={["1fr","1fr 1fr 1fr"]}
        spacing="4"
        w="100%"
        mb="4"
        px="4"
        rounded="md"
      >
        <AddCharacterButton onOpen={onOpen} />
        {
          characters.map(character => (
            <CharacterListItem 
              key={character.data.id} 
              image="https://github.com/HaloSara121.png" 
              name={character.data.characterSheet.infos.name} 
            />
          ))
        }
      </SimpleGrid>
      
      <motion.div
        whileTap={{ rotate: 360, }}
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "4rem",
          transition: "all .1 ease"
        }}
      >
        <Icon
          as={IoIosRefresh}
          w="6"
          h="6"
          onClick={getCharacters}
          _hover={{
            transform: "scale(1.1)",
            cursor: 'pointer'
          }}
        />
      </motion.div>
    </Section>
  )
}