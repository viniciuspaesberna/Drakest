import { Flex, Text } from "@chakra-ui/react";

import { CreateCharacterModalInput } from "../CreateCharacterModalInput";

interface ProficiencyBonusProps{
  setAttributeAmplifier: (name: string, skillName: string) => void
}

export function ProficiencyBonus({setAttributeAmplifier}: ProficiencyBonusProps){

  return (
    <Flex
      w="100%"
      h="14"
      align="center"
      justify="center"
      bgColor="gray.800"
      rounded="lg"
      px="2"
      py="8"
    >
      <CreateCharacterModalInput
        name="proficiencyBonus"
        type="number"
        width="12"
        height="12"
        bgColor="gray.100"
        color="gray.900"
        _hover={{}}
        rounded="full"
        textAlign="center"
        fontWeight="bold"
        mr="2"
        onChange={() => setAttributeAmplifier('all', 'all')}
      />
      <Text
        fontWeight="bold"
        textAlign="center"
        letterSpacing="wide"
      >
        Bonus de proeficiência
      </Text>
    </Flex>
  )
}