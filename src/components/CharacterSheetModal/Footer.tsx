import { Box, Button } from "@chakra-ui/react";

export  default function Footer(){
  return (
    <Box py="4">
      <Button
        colorScheme="yellow"
        marginLeft="calc(100% - 8rem)"
      >
        Salvar
      </Button>
    </Box>
  )
}