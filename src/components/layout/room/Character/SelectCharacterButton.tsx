import { MdAddCircle } from 'react-icons/md'

import { Flex, Icon } from "@chakra-ui/react";

export function SelectCharacterButton(){
  return (
    <Flex
      w="26%"
      align="center"
      bg="gray.900"
      justify="center"
      ml="auto"
      borderRadius="4rem 0 0 4rem"
      py="6"
      px="4"
      _hover={{
        cursor: "pointer"
      }}
    > 
      <Icon 
        as={MdAddCircle}
        w="14"
        h="14"
      />
    </Flex>
  )
}