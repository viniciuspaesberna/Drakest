import { Scope } from "@unform/core";
import { List } from "@chakra-ui/react";

import { AttributesListItem } from "../components/AttributesListItem";

interface AttributesListProps{
  setAttributeAmplifier: (attributeName: string, attributeBased: string) => void
}

export function AttributesList({setAttributeAmplifier}: AttributesListProps){
  return (
    <List
      spacing="8"
      w="10%"
      mr="4"
    >
      <Scope path="attributes">
        <AttributesListItem
          attributeName="Força"
          inputName="strength" 
          setAttributeAmplifier={setAttributeAmplifier}
        />
        <AttributesListItem
          attributeName="Destreza"
          inputName="dexterity" 
          setAttributeAmplifier={setAttributeAmplifier}
        />
        <AttributesListItem
          attributeName="Constituição"
          inputName="constitution" 
          setAttributeAmplifier={setAttributeAmplifier}
        />
        <AttributesListItem
          attributeName="Inteligência"
          inputName="intelligence" 
          setAttributeAmplifier={setAttributeAmplifier}
        />
        <AttributesListItem
          attributeName="Sabedoria"
          inputName="wisdom" 
          setAttributeAmplifier={setAttributeAmplifier}
        />
        <AttributesListItem
          attributeName="Carisma"
          inputName="charisma" 
          setAttributeAmplifier={setAttributeAmplifier}
        />
      </Scope>
    </List>
  )
}