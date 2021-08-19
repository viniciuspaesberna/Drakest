import { FormEvent, useRef } from 'react'
import { useRouter } from 'next/router'
import { FiHelpCircle } from 'react-icons/fi'
import Head from 'next/head'

import { Flex, Image, Stack, useToast} from '@chakra-ui/react'

import Header from '../components/home/Header'
import { Input } from '../components/geral/Form/Input'
import { Form } from '../components/geral/Form'
import { api } from '../services/api'
import { Loading } from '../components/geral/Loading'
import { useLoding } from '../hooks/useLoding'
import { useSession } from 'next-auth/client'

export default function Home() {
  const toast = useToast()
  const router = useRouter()
  const [session] = useSession()
  const { isLoading } = useLoding()

  const createRoomFormRef = useRef<HTMLFormElement>(null)
  const createRoomInputRef = useRef<HTMLInputElement>(null)

  const enterRoomFormRef = useRef<HTMLFormElement>(null)
  const enterRoomInputRef = useRef<HTMLInputElement>(null)


  const handleEnterRoom = async (event: FormEvent) => {
    event.preventDefault()
    const currentRoom = enterRoomInputRef.current.value

    if(!session){
      toast({
        duration: 3500,
        title: 'Não logado',
        status: 'warning',
        description: 'Faça login com o google e tente novamente!',
        isClosable: true
      })
      return
    }

    if(currentRoom.split('').length === 6){
      try {
        const res = await api.get('/room', {
          params: {
            roomId: currentRoom
          }
        })

        router.push(`/room/${res.data.roomId}`)

        return
      } catch {
        toast({
          duration: 3500,
          title: 'ID inválido',
          status: 'warning',
          description: 'Sala não encotrada, tente um ID existente!',
          isClosable: true
        })
        return
      }
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

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault()

    if(!session){
      toast({
        duration: 3500,
        title: 'Não logado',
        status: 'warning',
        description: 'Faça login com o google e tente novamente!',
        isClosable: true
      })
      return
    }

    const res = await api.post('/room')
    router.push(`/room/${res.data.roomId}`)
  }

  if(isLoading){    
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Home | Drakest</title>
      </Head>

      <Header />
      
      <Flex 
        as="main"
        display="flex"
        flex="1"
      >
        {/* <Aside /> */}

        <Flex
          align="center"
          justify="center"
          flexDir="column"
          m="auto"
        >
          <Image src="/bg.svg" scale="4" mt={["-8rem","-5rem"]}/>

          <Stack 
            direction={['column', "row"]}
            spacing={['5rem', "15rem"]}
            mt={["-2rem", "-2rem", "2rem"]}
            mb="4rem"
          >
            <Form
              submitAction={handleCreateRoom}
              heading="Criar uma sala"
              submitButtonName="Criar"
              icon={FiHelpCircle}
              ref={createRoomFormRef}
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
      </Flex>
    </>
  )
}