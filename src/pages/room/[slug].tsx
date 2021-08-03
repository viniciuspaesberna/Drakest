import { Flex, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
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
        onClose={onClose} 
        scrollBehavior="inside"
      />

      <Flex w="100%" mx="auto">
        <Flex flex="1">
        </Flex>
        <Flex align="center" w="100%" h="100vh" ml="auto" maxW="400px">
          <Characters />
        </Flex>
      </Flex>
    </>
  )
}