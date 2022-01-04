import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { Section, SectionHeading } from "../../../common";
import { CharacterListItem } from "./CharacterListItem";
import { AddCharacterButton } from "./AddCharacterButton"
import { useContext, useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { AuthContext } from "../../../../contexts/auth";

interface CharacterSectionProps{
  onOpen: () => void
}

export function CharacterSection({
  onOpen
}: CharacterSectionProps){
  const { user } = useContext(AuthContext)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function getCharacters(){
      const response = await api.get('characters', {
        params: {
          email: user.email
        }, 

      
      })

      setCharacters(response.data.characters)
    }

    getCharacters()
  }, [])

  useEffect(() => {
    
  }, [])

  return (
    <Section
      w="100%"
      flexDir="column"
      mb="1rem"
      bg="gray.800"
      rounded="md"
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
    </Section>
  )
}