import { ListItem, Text, Flex } from "@chakra-ui/react";
import { CreateCharacterModalInput } from '../CreateCharacterModalInput';
import { CreateCharacterModalCheckBox } from '../CreateCharacterModalCheckBox';

interface SkillListItemProps{
  name: string
  label: string
  attributeBased?: string
  setAttributeAmplifier: (name: string, attributeBased: string) => void
}

export function SkillListItem({
  name, 
  label,
  setAttributeAmplifier,
}: SkillListItemProps){
  
  return (
    <ListItem
      display="flex"
      w="100%"
      h="10"
      bg="gray.800"
      rounded="md"
      alignItems="center"
      justifyContent="space-between"
      px="4"
    >
      <Flex>
        <CreateCharacterModalCheckBox 
          name={name + `CheckBox`}
          onChange={() =>{
            setAttributeAmplifier(name, 'all')
          }}
        />

        <CreateCharacterModalInput 
          name={name}
          w="10"
          height="8"
          ml="4"
          type="number"
          border="none"
          bgColor="gray.700"
          fontSize="lg"
          textAlign="center"
        />
      </Flex>

      <Text
        textAlign="right"
      >
        {label}
      </Text>
    </ListItem>
  )
}