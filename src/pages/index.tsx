import { FormEvent, useRef } from 'react'
import { useRouter } from 'next/router'
import { FiHelpCircle } from 'react-icons/fi'
import Head from 'next/head'

import { Flex, Image, Stack, useToast} from '@chakra-ui/react'

import { Form, Input, Loading } from '../components/common'
import { Header, Aside } from '../components/layout/home'
import { api } from '../services/api'
import { useLoding } from '../hooks/useLoding'
import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next'

export default function Home({session}) {
  const toast = useToast()
  const router = useRouter()
  const { isLoading } = useLoding()

  const createRoomInputRef = useRef<HTMLInputElement>(null)
  const enterRoomInputRef = useRef<HTMLInputElement>(null)


  const handleEnterRoom = async (event: FormEvent) => {
    event.preventDefault()
    const currentRoom = enterRoomInputRef.current.value

    if(!session){
      return toast({
        duration: 3500,
        title: 'Não logado',
        status: 'warning',
        description: 'Faça login com o google e tente novamente!',
        isClosable: true
      })
    }

    if(currentRoom.split('').length === 6){
      try {
        const res = await api.get('/room', {
          params: {
            roomId: currentRoom
          }
        })

        router.push(`/room/${res.data.roomId}`)
      } catch {
        toast({
          duration: 3500,
          title: 'ID inválido',
          status: 'warning',
          description: 'Sala não encotrada, tente um ID existente!',
          isClosable: true
        })
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

    if(!session) {
      return toast({
        duration: 3500,
        title: 'Não logado',
        status: 'warning',
        description: 'Faça login com o google e tente novamente!',
        isClosable: true
      })
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  let session: boolean

  if(cookies['next-auth.session-token']){
    session = true
  } else {
    session = false 
  }

  return {
    props: {
      session
    }
  }
}