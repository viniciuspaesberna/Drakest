import { Scope } from "@unform/core";

import { List, Text } from "@chakra-ui/react";

import { SkillListItem } from "../components/SkillListItem";

interface SkillsListProps{
  setAttributeAmplifier: (attributeName: string, attributeBased: string) => void
}

export function SkillsList({ setAttributeAmplifier }: SkillsListProps){
  return (
    <List
      mt="2"
      spacing="1"
    >
      <Text
        textAlign="center"
        fontSize="lg"
        fontWeight="semibold"
      >
        Pericias
      </Text>
      <Scope path="skills">
        <SkillListItem
          name="acrobatics"
          label="Acrobacia"
          attributeBased="dexterity"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="arcana"
          label="Arcanismo"
          attributeBased="intelligence"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="athletics"
          label="Atletismo"
          attributeBased="strength"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="performace"
          label="Atuação"
          attributeBased="charisma"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="deception"
          label="Enganação"
          attributeBased="charisma"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="stealth"
          label="Furtividade"
          attributeBased="dexterity"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="history"
          label="História"
          attributeBased="intelligence"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="intimidation"
          label="Intimidação"
          attributeBased="charisma"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="insight"
          label="Intuição"
          attributeBased="wisdom"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="investigation"
          label="Investigação"
          attributeBased="intelligence"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="animalHandling"
          label="Lidar com animais"
          attributeBased="wisdom"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="medicine"
          label="Medicina"
          attributeBased="wisdom"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="nature"
          label="Natureza"
          attributeBased="intelligence"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="perception"
          label="Percepção"
          attributeBased="wisdom"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="persuasion"
          label="Persuasão"
          attributeBased="charisma"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="sleightOfHand"
          label="Prestidigitação"
          attributeBased="dexterity"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="religion"
          label="Religião"
          attributeBased="Intelligence"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
        <SkillListItem
          name="survival"
          label="Sobrevivencia"
          attributeBased="wisdom"
          setAttributeAmplifier={setAttributeAmplifier} 
        />
      </Scope>
    </List>
  )
}