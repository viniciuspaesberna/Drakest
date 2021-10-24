import { Flex, Text } from '@chakra-ui/react'

import { CreateCharacterModalInput } from '../../CreateCharacterModalInput'


interface SummaryItemProps{
  name: string
  inputName: string
}

export function SummaryItem({
  name,
  inputName,
}: SummaryItemProps){
  return (
    <Flex
      flexDir="column"
      justify="center"
      align="center"
      bgColor="gray.800"
      rounded="md"
      w="100%"
    >
      <Text
        textAlign="center"
      >
        {name}
      </Text>
      <CreateCharacterModalInput 
        type="number"
        name={inputName} 
        flex="1"
        bgColor="none"
        _hover={{}}
        textAlign="center"
        p="2"
        fontSize="3xl"
      />
    </Flex>
  )
}