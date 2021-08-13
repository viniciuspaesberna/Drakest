import { FormEvent, useRef } from 'react'
import { useRouter } from 'next/router'

import { FiHelpCircle } from 'react-icons/fi'
import { Flex, Image, Stack, useBreakpointValue, useToast} from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'
import { Input } from '../components/Form/Input'
import { Form } from '../components/Form'
import { GetStaticPaths, GetStaticProps } from 'next'

export default function Home() {
  const toast = useToast()
  const router = useRouter()

  const enterRoomFormRef = useRef<HTMLFormElement>(null)
  const enterRoomInputRef = useRef<HTMLInputElement>(null)
  
  const createRoomFormRef = useRef<HTMLFormElement>(null)
  const createRoomInputRef = useRef<HTMLInputElement>(null)

  const handleEnterRoom = (e: FormEvent) => {
    e.preventDefault()
    const currentRoom = enterRoomInputRef.current.value

    if(currentRoom.split('').length === 6){
      router.push(`/room/${currentRoom}`)
    } else {
      toast({
        duration: 3500,
        title: 'ID inválido',
        status: 'warning',
        description: 'Tente um ID de 6 digitos',
        isClosable: true
      })
    }
  }

  const handleCreateRoom = () => {
    
  }

  return (
    <>
      <Head>
        <title>Home | Drakest</title>
      </Head>

      <Header />
      
      <Flex as="main" align="center" flexDir="column" justify="center" m="auto">
        <Image src="/bg.svg" scale="4" mt={["-8rem","-5rem"]}/>

        <Stack 
          direction={['column', "row"]}
          spacing={['5rem', "15rem"]}
          mt={["-2rem", "2rem"]}
        >
          <Form
            submitAction={handleCreateRoom}
            heading="Criar uma sala"
            submitButtonName="Criar"
            ref={createRoomFormRef}
            icon={FiHelpCircle}
          >
            <Input
              name="roomPassword"
              type="password"
              placeholder="Criar senha da sala"
              ref={createRoomInputRef}
            />
          </Form>
          <Form
            submitAction={handleEnterRoom}
            heading="Entrar numa sala"
            submitButtonName="Buscar"
            ref={enterRoomFormRef}
          >
            <Input
              name="roomId"
              type="number"
              placeholder="ID da sala"
              ref={enterRoomInputRef}
            />
          </Form>
        </Stack>
      </Flex>
    </>
  )
}