import Head from "next/head";

import { Flex, useDisclosure } from "@chakra-ui/react";

import { Characters } from "../../components/Characters";
import { CharacterSheetModal } from "../../components/CharacterSheetModal";
import { DicesSection } from "../../components/DicesSection";

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
          <Flex
            width="30rem"
            bg="gray.900"
            rounded="3xl"
            my="4"
            mx="6"
          >
            <DicesSection />
          </Flex>

        </Flex>
        <Flex align="center" w="100%" h="100vh" ml="auto" maxW="400px">
          <Characters openCharacterSheet={onOpen} />
        </Flex>
      </Flex>
    </>
  )
}

