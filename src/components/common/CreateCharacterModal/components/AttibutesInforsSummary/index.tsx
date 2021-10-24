
import { Flex, Stack } from '@chakra-ui/react'

import { SummaryItem } from './SummaryItem'

export function AttributesInfosSummary(){
  return (
    <Flex>
      <Stack
        h="32"
        direction="row"
        spacing="4"
        justify="space-between"
      >
        <SummaryItem name="Classe de Armadura" inputName="classArmor"/>
        <SummaryItem name="Classe de Armadura" inputName="classArmor"/>
        <SummaryItem name="Classe de Armadura" inputName="classArmor"/>
      </Stack>
      <Flex></Flex>
      <Flex></Flex>
    </Flex>
  )
}