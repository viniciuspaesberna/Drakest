import { Button, Flex, SlideFade, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { Characters } from "../../components/Characters";
import CharacterSheetModal from "../../components/CharacterSheetModal";

export default function Room(){
  const { isOpen, onOpen, onClose } = useDisclosure()

  return(
    <>
      <Head>
        {/* <title>{`Room-${roomId} | Drakest`}</title> */}
      </Head>

      <CharacterSheetModal
        isOpen={isOpen} 
        onRequestClose={onClose}
      />
      
      <Flex w="100%" mx="auto">
        <Flex flex="1">
        </Flex>
        <Flex align="center" w="100%" h="100vh" ml="auto" maxW="400px">
          <Characters openCharacterSheet={onOpen} />
        </Flex>
      </Flex>
    </>
  )
}