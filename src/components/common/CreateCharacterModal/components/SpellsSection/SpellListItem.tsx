import { Scope } from "@unform/core";
import { useEffect, useState } from "react";

import { Flex } from "@chakra-ui/layout";

import { CreateCharacterModalCheckBox } from "../../CreateCharacterCheckBox";
import { CreateCharacterModalInput } from "../../CreateCharacterInput";

interface SpellListItemProps{
  line: string
  level: string
  haveLabel?: string
  usingLines: number
  setUsingLines: (number: number) => void
}

export function SpellListItem({
  line,
  level,
  usingLines,
  setUsingLines,
  haveLabel
}: SpellListItemProps){
  const [isUsing, setIsUsing] = useState(false)

  useEffect(() => {
    if(isUsing) {
      setUsingLines(usingLines + 1)
    } else {
      setUsingLines(usingLines - 1)
    }
  }, [isUsing])

  useEffect(() => {
    setUsingLines(0)
  }, [])

  return (
    <Scope path={line}>
      <Flex
        bg="gray.800"
        pl="2"
        w="98%"
        alignSelf="center"
        borderBottom="1px solid #9699b0"
      >
        <CreateCharacterModalCheckBox
          name={`${line}-Checkbox-level${level}`}
        />

        <CreateCharacterModalInput 
          name={`${line}-SpellName-level${level}`}
          fontSize="lg"
          ml="2"
          bgColor="transparent"
          placeholder={haveLabel ? `${haveLabel}` : "Nome da Magia"}
          onChange={e => setIsUsing(!!e.target.value)}
        />
      </Flex>
    </Scope>
  )
}