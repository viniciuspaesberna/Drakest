import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FiCopy } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi' 
import { IoMenu, IoClose } from 'react-icons/io5' 

import { Button, Flex, Icon, Text, Link, useToast, HStack } from "@chakra-ui/react";

interface RoomHeaderProps{
  roomId: string
  toggleAside: (value: boolean) => void
  asideIsOpen: boolean
  roomName?: string
}

export function RoomHeader({
  roomId,
  toggleAside,
  asideIsOpen,
  roomName
}: RoomHeaderProps){
  const toast = useToast()

  return(
    <Flex 
      as="header"
      h="14" 
      align="center" 
      justify="space-between" 
      w="100%"
      px="6"
      py="2"
      mx="auto"
      borderBottom="1px solid #616480"
    >
      <HStack
        spacing="4"
        align="center"      
      >
        <Link href="/">
          <Icon
            as={BiArrowBack}
            w="6"
            mt="-1"
            h="6"
            _hover={{
              transform: "scale(1.1)",
              cursor: 'pointer'
            }}
          />
        </Link>

        <Icon
          as={asideIsOpen ? IoClose : IoMenu}
          w="6"
          h="6"
          ml="4"
          onClick={() => toggleAside(!asideIsOpen)}
          _hover={{
            transform: "scale(1.1)",
            cursor: 'pointer'
          }}
        />
      </HStack>

      <Flex>
        <Text
          fontSize="3xl"
          fontWeight="bold"
        >
          {roomName}
        </Text>
      </Flex>
      
      <CopyToClipboard text={roomId}>
        <Button
          p="3"
          colorScheme="yellow"
          _focus={{
            outlineColor: "green.300",
          }}
          onClick={() =>{
            toast.closeAll()
            toast({
              status: "success",
              title: "Copied!",
              duration: 1500
            })
          }}
        >
          <FiCopy />
          <Text ml="2">#{roomId}</Text>
        </Button>
      </CopyToClipboard>
    </Flex>
  )
}