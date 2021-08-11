import { Divider, Heading, HeadingProps, Text } from "@chakra-ui/react";

interface SectionHeadingProps extends HeadingProps {
  name: string
  nameColor?: string
}

export function SectionHeading({ name, nameColor, ...rest }: SectionHeadingProps){
  return (
    <Heading
      color={nameColor || "yellow.500"}
      w="100%"
      my="2"
      textAlign="center"
      {...rest}
    >
      <Text fontFamily="Aclonica" >{name}</Text>

      <Divider
        w="85%"
        m="auto"
        my="4"
        borderColor="gray.600" 
        boxShadow=" 1px 1px 2px #fff"
        rounded="sm"
      />
    </Heading>
  )
}