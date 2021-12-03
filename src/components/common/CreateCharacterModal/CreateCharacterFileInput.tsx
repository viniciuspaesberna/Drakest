import { Flex, Icon, Input } from "@chakra-ui/react"
import { AiFillFileImage } from 'react-icons/ai'
// import Dropzone, { useDropzone } from "react-dropzone"
import { useEffect, useRef } from "react"
import { useField } from "@unform/core"

interface CreateCharacterFileInputProps{
  name?: string
  onUpload: (file: any) => void
}

export function CreateCharacterFileInput({ name, onUpload }: CreateCharacterFileInputProps) {
  // const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({
  //   accept: 'image/*',
  //   onDrop: onUpload
  // })

  const inputRef = useRef<HTMLInputElement>(null)

  const {fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
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

  function verifyIsDragActive(
      isDragActive: any, 
      isDragReject: any, 
      deafult: string, 
      actValue: string, 
      rejValue: string 
  ) {
    if(!isDragActive && !isDragReject) {
      return deafult
    }

    if(isDragReject){
      return rejValue
    }

    if(isDragActive){
      return actValue
    }
  }

  return (
    <Flex
      // {...getRootProps()}
      h="100%"
      w="100%"
      m="auto"
      cursor="pointer"
      align="center"
      justify="center"
      overflow="hidden"
      bg="transparent"
      position="relative"
    >
      <Input
        // {...getInputProps()}
        name={name}
        ref={inputRef}
        defaultValue={defaultValue}
        type="file"
        accept="image/*"
        w="100%"
        h="100%"
        opacity="0"
        cursor="pointer"
        position="absolute"
        multiple={false}
        onChange={onUpload}
      />

      <Icon 
        as={AiFillFileImage}
        w="24"
        h="24"
        // color={`${verifyIsDragActive(isDragActive, isDragReject, '#797d9a', "#0f0c", "#f00c")}`}
        // bg={`${verifyIsDragActive(isDragActive, isDragReject, '#0000', "#0f01", "#f001")}`}
        p="2"
        rounded="lg"
      />
    </Flex>
  )
}