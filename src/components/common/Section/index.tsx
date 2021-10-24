import { ReactNode } from "react";
import { Flex, FlexProps } from "@chakra-ui/react"; 

interface SectionProps extends FlexProps{
  children?: ReactNode
}

export function Section({ children, ...rest }: SectionProps){
  return (
    <Flex as="section" {...rest}>
      {children}
    </Flex>
  )
}