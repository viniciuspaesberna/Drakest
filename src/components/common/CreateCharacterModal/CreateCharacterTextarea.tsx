import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { Textarea, TextareaProps } from "@chakra-ui/react";

interface CreateCharacterTextareaProps extends TextareaProps {
  name: string
}

export function CreateCharacterTextarea({
  name,
  ...rest
}: CreateCharacterTextareaProps){

  const TextareaRef = useRef<HTMLTextAreaElement>(null)

  const {fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: TextareaRef,
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
    <Textarea 
      defaultValue={defaultValue}
      name={name}
      ref={TextareaRef}
      resize="none"
      border="none"
      bg="gray.800"
      fontSize="xl"
      lineHeight="6"
      _hover={{
        bg: "gray.900"
      }}
      _focus={{
        outline: "none",
        bg: "gray.900"
      }}
      {...rest}
    />
  )
}