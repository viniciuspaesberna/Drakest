import { Stack, Flex, Text } from "@chakra-ui/layout";
import { Scope } from "@unform/core";
import { useCallback, useEffect, useState } from "react";
import { CreateCharacterModalCheckBox } from "../../CreateCharacterCheckBox";
import { CreateCharacterModalInput } from "../../CreateCharacterInput";
import { SpellListItem } from "./SpellListItem";

interface SpellsListProps{
  level: string,
  label?: string
}

type Line = {
  name: string
  i: string
}

export function SpellsList({
  level,
  label
}: SpellsListProps){
  const [lines, setLines] = useState<Line[] | null>([])
  const [usingLines, setUsingLines] = useState<number>(0)

  useEffect(() => {
    usingLines < 0 ?? setUsingLines(0)  
  }, [usingLines])

  useEffect(() => {
    SpellsLines(12) 
  }, [])

  const SpellsLines = useCallback((linesNumber=0) => {
    linesNumber = Number(linesNumber)
    
    if(linesNumber === 0 || null) setLines(null)

    const newlines = []
    
    for(let i = 1; i <= linesNumber; i++){
      newlines.push({
        name: 'line' + i,
        i: 'line' + i + `Level ${level}`,
      })
    }

    setLines(newlines)
  }, [])  

  return (
    <Scope path={`level${level}`}>
      <Stack
        spacing="1"
        w="100%"
        minH="30rem"
        bg="gray.800"
        rounded="md"
        position="relative"
        pb="1"
      >
        <Flex
          align="center"
          bg="gray.800"
          rounded="md"
          h="10"
        >
          <Text
            w="20%"
            textAlign="center"
            borderRight="1px solid #fff"
            fontSize="lg"
          >
            {level}
          </Text>
          { 
            label ?
            
            <Text
              w="80%"
              textAlign="center"
              fontSize="lg"
            >
              {label}
            </Text> 

            :
            
            <Flex
              align="center"
              justify="space-around"
            >
              <CreateCharacterModalInput 
                name={`totalSpaceLevel${level}`}
                type="number"
                placeholder="Total: 12"
                isReadOnly
                cursor="initial"
                w="50%"
                max="12"
                fontSize="lg"
                height="8"
                _hover={{}}
                _focus={{}}
                textAlign="center"
                ml="2"
                onChange={e => SpellsLines(e.target.value)}
              />
              <CreateCharacterModalInput 
                name={`usingSpaceLevel${level}`}
                type="number"
                placeholder={`Utilizado: ${usingLines}`}
                isReadOnly
                cursor="initial"
                w="50%"
                fontSize="lg"
                height="8"
                textAlign="center"
                p="0"
                _hover={{}}
                _focus={{}}
                mx="2"
              />
            </Flex>
          }
        </Flex>
        
        {
          lines && lines.map(line => {
            if(lines.length <= 12) return (
              <SpellListItem 
                key={line.i}
                line={line.name}
                level={level}
                usingLines={usingLines}
                setUsingLines={setUsingLines}
                haveLabel={label}
              />
            )
          })
        }
      </Stack>
    </Scope>
  )
}