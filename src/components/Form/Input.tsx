import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputProps extends ChakraInputProps {
  name: string,
  label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
  ({name, label, ...rest}, ref) => {
    return (
      <FormControl>
        {
          !! label && <FormLabel htmlFor={name}>{label}</FormLabel>
        }
        <ChakraInput
          h="1.5"
          name={name}
          id={name}
          focusBorderColor="yellow.400"
          textAlign="center"
          variant="unstyled"
          _hover={{
            bgColor: 'gray.900'
          }}
          ref={ref}
          size="lg"
          {...rest}
        />
          
      </FormControl>
    )
}

export const Input = forwardRef(InputBase)