import { BiArrowBack } from 'react-icons/bi' 
import { FiCopy } from 'react-icons/fi';
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Button, Flex, Icon, Text, Link, useToast } from "@chakra-ui/react";

interface RoomHeaderProps{
  roomId: string
}

export function RoomHeader({roomId}: RoomHeaderProps){
  const toast = useToast()

  return(
    <Flex h="2rem" align="center" justify="space-between" mx="6" >
      <Link href="/">
        <Icon
          as={BiArrowBack}
          w="6"
          h="6"
          _hover={{
            transform: "scale(1.1)",
            cursor: 'pointer'
          }}
        />
      </Link>
      <CopyToClipboard text={roomId}>
        <Button
          colorScheme="yellow"
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