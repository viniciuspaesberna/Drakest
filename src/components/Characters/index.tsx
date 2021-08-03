import { Avatar, Flex, Stack, Text } from "@chakra-ui/react";
import { Input } from "../Form/Input";

export function Characters(){
  return(
    <Stack
      spacing="1rem"
      w="100%"
      >
      <Flex
        w="100%"
        align="center"
        bg="gray.900"
        p="6"
        borderRadius="2rem 0 0 2rem"
      >
        <Flex ml="4" flex="1" flexDir="column">
          <Text fontSize="xl" ml="2">Halo Sara 121</Text>
          <Input name="hp" type="number" placeholder="hp" _placeholder={{color:"gray.600"}} w="10" />
        </Flex>
        <Avatar size="lg" src="https://github.com/HaloSara121.png" alt="HaloSara"/>
      </Flex>
      <Flex
        w="100%"
        align="center"
        bg="gray.900"
        p="6"
        borderRadius="2rem 0 0 2rem"
      >
        <Flex ml="4" flex="1" flexDir="column">
          <Text fontSize="xl" ml="2">Halo Sara 121</Text>
          <Input name="hp" type="number" placeholder="hp" _placeholder={{color:"gray.600"}} w="10" />
        </Flex>
        <Avatar size="lg" src="https://github.com/HaloSara121.png" alt="HaloSara"/>
      </Flex>
      <Flex
        w="100%"
        align="center"
        bg="gray.900"
        p="6"
        borderRadius="2rem 0 0 2rem"
      >
        <Flex ml="4" flex="1" flexDir="column">
          <Text fontSize="xl" ml="2">Halo Sara 121</Text>
          <Input name="hp" type="number" placeholder="hp" _placeholder={{color:"gray.600"}} w="10" />
        </Flex>
        <Avatar size="lg" src="https://github.com/HaloSara121.png" alt="HaloSara"/>
      </Flex>
    </Stack>
  )
}