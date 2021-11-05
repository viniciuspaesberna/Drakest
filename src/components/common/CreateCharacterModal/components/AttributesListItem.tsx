import { Flex, Text, ListItem, InputProps } from "@chakra-ui/react";

import { CreateCharacterModalInput } from "../CreateCharacterModalInput";

interface AttributesListItemProps extends InputProps{
  inputName: string
  attributeName: string
  setAttributeAmplifier: (attributeName: string, attributeBased: string) => void
}

export function AttributesListItem({ 
  attributeName, 
  inputName, 
  setAttributeAmplifier,
  ...rest 
}: AttributesListItemProps){

  return (
    <ListItem
      display="flex"
      flexDir="column"
      w="8rem"
      h="10rem"
      bg="gray.800"
      rounded="xl"
      _hover={{
        bgColor: "gray.900"
      }}
    >
      <Text
        fontSize="lg"
        fontWeight="medium"
        textAlign="center"
      >
        {attributeName}
      </Text>
      <CreateCharacterModalInput 
        name={inputName}
        mt="-2"
        type="number"
        textAlign="center"
        fontSize="6xl"
        bgColor="trasparent"
        rounded="lg"
        border="0"
        _hover={{}}
        onChange={() => {
          setAttributeAmplifier(inputName, 'all')
        }}
        {...rest}
      />
      
      <Flex
        w="14"
        h="14"
        mx="auto"
        mb="-20%"
        rounded="full"
        bg="gray.100"  
        align="center"
        justify="center"
      >
        <CreateCharacterModalInput 
          name={inputName + 'Amplifier'}
          type="number"
          w="10"
          h="10"
          textAlign="center"
          color="gray.900"
          fontWeight="bold"
          fontSize="md"
          bgColor="none"
          border="none"
          _hover={{}}
          _focus={{
            outline: "none"
          }}
        />
      </Flex>
    </ListItem>
  )
}