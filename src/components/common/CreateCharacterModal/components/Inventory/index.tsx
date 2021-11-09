import { Flex, Text } from "@chakra-ui/react";
import { Scope } from "@unform/core";
import { CreateCharacterTextarea } from "../../CreateCharacterTextarea";
import { MoneyList } from "./MoneyList";
import { WeaponList } from "./WeaponList";

export function Inventory(){
  return (
    <Scope path="inventory">

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
        <Scope path="equipments">
          <CreateCharacterTextarea 
            name="equipmentsText"
            placeholder="Equipamentos"
            height="80"
            mt="4"
          />
        </Scope>
      </Flex>
    </Scope>
  )
}