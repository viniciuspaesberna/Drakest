import { Button, Divider, Flex, Heading, Icon, useToast } from "@chakra-ui/react";
import { ElementType, forwardRef } from "react";
import { FormEvent, ForwardRefRenderFunction, ReactNode } from "react";

interface FormProps {
  submitButtonName: string
  heading: string
  children?: ReactNode
  icon?: ElementType
  submitAction: (e: FormEvent) => void
}

const FormBase: ForwardRefRenderFunction<HTMLFormElement, FormProps> = 
({children, heading, submitButtonName, icon, submitAction}, ref) => {
  const toast = useToast()

  return (
    <Flex as="form" ref={() => ref} onSubmit={submitAction} flexDir="column">
      <Heading fontSize="2xl" fontWeight="500" textAlign="center">
        {heading}
        {icon && <Icon 
          onMouseEnter={() => toast({
            status: "info",
            title: "Criação de sala",
            description: "Essa senha será utilizada para realizar ações como adiministrador da sala",
            duration: 1000 * 60 //1 minute
          })}
          onMouseLeave={() => toast.closeAll()}
          ml="2" 
          color="blue.400" 
          as={icon} />}
      </Heading>

      <Divider my="6" borderColor="gray.600" />

      {children}

      <Button 
        fontSize="xl"
        type="submit"
        mt="4"
        colorScheme="yellow"
      >
        {submitButtonName}
      </Button>
    </Flex>
  )
}

export const Form = forwardRef(FormBase)