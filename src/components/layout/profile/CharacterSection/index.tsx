import { SimpleGrid } from "@chakra-ui/layout";
import { Section, SectionHeading } from "../../../common";
import { CharacterListItem } from "./CharacterListItem";
import { AddCharacterButton } from "./AddCharacterButton"

interface CharacterSectionProps{
  onOpen: () => void
}

export function CharacterSection({
  onOpen
}: CharacterSectionProps){
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
        <CharacterListItem image="https://github.com/HaloSara121.png" name="HaloSara" />
        <CharacterListItem image="https://github.com/HaloSara121.png" name="HaloSara" />
        <CharacterListItem image="https://github.com/HaloSara121.png" name="HaloSara" />
        <CharacterListItem image="https://github.com/HaloSara121.png" name="HaloSara" />
        <CharacterListItem image="https://github.com/HaloSara121.png" name="HaloSara" />  
        <CharacterListItem image="https://github.com/HaloSara121.png" name="HaloSara" />    
      </SimpleGrid>
    </Section>
  )
}