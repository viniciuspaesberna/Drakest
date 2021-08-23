import { BiArrowBack } from 'react-icons/bi' 

import { Flex, Icon } from "@chakra-ui/react";
import Link from 'next/link';

export function RoomHeader(){
  return(
    <Flex h="2rem" align="center" mx="6" >
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