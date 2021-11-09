import { Flex, Text } from '@chakra-ui/react'

import { CreateCharacterModalInput } from '../../CreateCharacterInput'


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
      _hover={{
        bgColor:'gray.900'
      }}
      transition="background-color .4s"
    >
      <Text
        textAlign="center"
        color="gray.400"
        fontWeight="bold"
        fontSize="md"
      >
        {name}
      </Text>
      <CreateCharacterModalInput 
        type="number"
        name={inputName} 
        flex="1"
        w="60%"
        bgColor="none"
        border="none"
        _hover={{}}
        textAlign="center"
        p="2"
        fontSize="5xl"
      />
    </Flex>
  )
}