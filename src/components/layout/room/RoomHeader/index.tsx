import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FiCopy } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi' 
import { IoMenu } from 'react-icons/io5' 

import { Button, Flex, Icon, Text, Link, useToast } from "@chakra-ui/react";

interface RoomHeaderProps{
  roomId: string
}

export function RoomHeader({roomId}: RoomHeaderProps){
  const toast = useToast()

  return(
    <Flex 
      as="header"
      h="14" 
      align="center" 
      justify="space-between" 
      maxW="96%"
      w="100%"
      mx="auto"
    >
      <Flex
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
          as={IoMenu}
          w="6"
          h="6"
          ml="4"
          _hover={{
            transform: "scale(1.1)",
            cursor: 'pointer'
          }}
        />
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