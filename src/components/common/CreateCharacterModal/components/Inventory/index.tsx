import { Flex, Stack, Text } from "@chakra-ui/react";
import { Scope } from "@unform/core";
import { CreateCharacterModalInput } from "../../CreateCharacterModalInput";
import { CreateCharacterTextarea } from "../../CreateCharacterTextarea";
import { MoneyList } from "./MoneyList";
import { WeaponInput } from "./WeaponInput";
import { WeaponList } from "./WeaponList";

export function Inventory(){
  return (
    <Flex 
      mt="2"
      flexDir="column"
    >
      <Scope path="money">
        <Flex
          flexDir="column"
        >
          <Text
            textAlign="center"
            fontSize="xl"
          >
            Dinheiro
          </Text>
          
          <MoneyList />
        </Flex>
      </Scope>
      <Scope path="weaponsAndAttacks">
        <WeaponList />

        <CreateCharacterTextarea 
          name="attacksDescriptionText"
          placeholder="Descreva seus ataques e armas"
          height="60"
          mt="4"
        />
      </Scope>
      <Scope path="equipment">
        <CreateCharacterTextarea 
          name="attacksDescriptionText"
          placeholder="Equipamentos"
          height="80"
          mt="4"
        />
      </Scope>
    </Flex>
  )
}