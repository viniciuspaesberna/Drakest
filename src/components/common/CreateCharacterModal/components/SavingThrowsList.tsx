import React, {  } from "react";
import { Scope } from "@unform/core";

import { List, Text } from "@chakra-ui/react";

import { SkillListItem } from "../components/SkillListItem";

interface SavingThrowsListProps{
  setAttributeAmplifier: (attributeName: string, attributeBased: string) => void
}


export function SavingThrowsList({ setAttributeAmplifier }: SavingThrowsListProps){
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
        Salva Guarda
      </Text>
      <Scope path="savingThrows">
        <SkillListItem name="strength" label="Força" setAttributeAmplifier={setAttributeAmplifier} />
        <SkillListItem name="dexterity" label="Destreza" setAttributeAmplifier={setAttributeAmplifier} />
        <SkillListItem name="constitution" label="Constituição" setAttributeAmplifier={setAttributeAmplifier} />
        <SkillListItem name="intelligence" label="Inteligência" setAttributeAmplifier={setAttributeAmplifier} />
        <SkillListItem name="wisdom" label="Sabedoria" setAttributeAmplifier={setAttributeAmplifier} />
        <SkillListItem name="charisma" label="Carisma" setAttributeAmplifier={setAttributeAmplifier} />
      </Scope>
    </List>
  )
}