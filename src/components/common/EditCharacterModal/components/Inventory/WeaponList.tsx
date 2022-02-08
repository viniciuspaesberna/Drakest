import { Scope } from "@unform/core";
import { WeaponInput } from "./WeaponInput";

import { Stack, Text } from "@chakra-ui/react";

export function WeaponList(){
  return (
    <Stack
      direction="column"
      spacing="2"
      mt="2"
    >
      <Text
        textAlign="center"
        fontSize="xl"
      >
        Armas
      </Text>

      <Scope path="weapon1">
        <WeaponInput name="weapon1" />
      </Scope>

      <Scope path="weapon2">
        <WeaponInput name="weapon2" />
      </Scope>

      <Scope path="weapon3">
        <WeaponInput name="weapon3" />
      </Scope>
    </Stack>
  )
}