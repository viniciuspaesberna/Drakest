import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { Textarea, TextareaProps, Text, Flex, FlexProps } from "@chakra-ui/react";

interface CreateCharacterTextareaProps extends FlexProps {
  name: string
  placeholder: string
}

export function CreateCharacterTextarea({
  name,
  placeholder,
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
    <Flex
      flexDir="column"
      pt="1"
      rounded="md"
      bg="gray.800"
      onClick={() => TextareaRef.current.focus() }
      _hover={{
        bg: "gray.900"
      }}
      {...rest}
    >
      <Text
        mx="4"
        color="gray.400"
        fontWeight="bold"
        fontSize="lg"
      >
        {placeholder}
      </Text>
      <Textarea 
        defaultValue={defaultValue}
        name={name}
        ref={TextareaRef}
        resize="none"
        border="none"
        w="100%"
        h="100%"
        bg="transparent"
        fontSize="xl"
        lineHeight="6"
        _focus={{
          outline: "none",
          bg: "gray.900"
        }}
      />
    </Flex>
  )
}