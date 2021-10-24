import { Input, InputProps } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { useField } from "@unform/core";


export function CreateCharacterModalInput({ name, ...rest}: InputProps){
  const InputRef = useRef<HTMLInputElement>(null)

  const {fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: InputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <Input
      defaultValue={defaultValue}
      ref={InputRef}
      transition="background-color .4s"
      variant="unstyled"
      p="2"
      border="1px solid #181b23cc"
      borderRadius="4"
      autoComplete="off"
      fontSize="2xl"
      bgColor='gray.800'
      _hover={{
        bgColor:'gray.900'
      }}
      _placeholder={{
        color: 'gray.400'
      }}
      {...rest}
    />
  )
}