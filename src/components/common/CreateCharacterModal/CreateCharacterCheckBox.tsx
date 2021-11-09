import { Checkbox, CheckboxProps } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { useField } from "@unform/core";


export function CreateCharacterModalCheckBox({ name, ...rest}: CheckboxProps){
  const CheckBoxRef = useRef(null)

  const {fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: CheckBoxRef,
      getValue: ref => {
        return ref.current.checked
      },
      setValue: (ref, value) => {
        ref.current.checked = value
      },
      clearValue: ref => {
        ref.current.checked = false
      },
    })
  }, [fieldName, registerField])

  return (
    <Checkbox
      defaultValue={defaultValue}
      ref={CheckBoxRef}
      colorScheme="yellow"
      name={name + '-CheckBox'}
      readOnly
      _focus={{
        outline: "none"
      }}
      {...rest}
    />
  )
}