
import { Flex, Stack, Text } from '@chakra-ui/react'
import { Scope } from '@unform/core'
import { CreateCharacterModalInput } from '../../CreateCharacterModalInput'
import { DiceInput } from '../DiceInput'

import { SummaryItem } from './SummaryItem'

export function AttributesInfosSummary(){
  return (
    <Flex
      flexDir="column"
    >
      <Stack
        h="32"
        direction="row"
        spacing="4"
        justify="space-between"
      >
        <SummaryItem name="Classe de Armadura" inputName="classArmor"/>
        <SummaryItem name="Iniciativa" inputName="iniciative"/>
        <SummaryItem name="Deslocamento" inputName="speed"/>
      </Stack>
      <Flex
        w="100%"
        h="32"
        mt="4"
        rounded="md"
      >
        <Scope path="hpInfos">

          <Flex
            w="47%"
            flexDir="column"
            bg="gray.800"
            rounded="md"
            _hover={{
              bg: "gray.900"
            }}
          >
            <Text
              textAlign="center"
              fontSize="xl"
            >
              Vida
            </Text>

            <CreateCharacterModalInput 
              name="hp"
              w="100%"
              height="100%"
              rounded="md"
              bgColor="transparent"
              border="none"
              _hover={{}}
              textAlign="center"
              fontSize="5xl"
            />
          </Flex>
          
          <Flex
            bg="gray.800"
            w="100%"
            h="32"
            rounded="md"
            ml="4"
            p="2"
            align="center"
          > 
            <Flex
              flexDir="column"
              w="50%"
            >
              <Text
                textAlign="center"
                fontSize="xl"
              >
                Vida Total
              </Text>

              <CreateCharacterModalInput 
                w="100%"
                height="100%"
                name="totalHp"
                rounded="md"
                bgColor="transparent"
                border="none"
                textAlign="center"
                fontSize="5xl"
              />
            </Flex>

            <Flex
              flexDir="column"
              w="50%"
              ml="2"
            >
              <Text
                textAlign="center"
                fontSize="xl"
                mb="6"
              >
                Dado de vida
              </Text>

              <DiceInput name="hp"/>
            </Flex>

          </Flex>
        </Scope>
      </Flex>      
    </Flex>
  )
}