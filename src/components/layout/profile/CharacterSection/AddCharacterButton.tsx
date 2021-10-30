import { MdAddCircle } from 'react-icons/md'
import { IconButton } from '@chakra-ui/react'

interface AddCharacterButtonProps{
  onOpen: () => void
}

export function AddCharacterButton({
  onOpen
}: AddCharacterButtonProps){
  return(
    <IconButton
      aria-label="adicionar personagem"
      h="100%"
      display="flex"
      align="center"
      justify="center"
      bg="gray.700"
      rounded="md"
      transition="filter 300ms"
      _hover={{
        filter: "brightness(.8)"
      }}
      _focus={{
        outline: "none"
      }}
      onClick={onOpen}
    >
      <MdAddCircle  size="50" />
    </IconButton>
  )
}