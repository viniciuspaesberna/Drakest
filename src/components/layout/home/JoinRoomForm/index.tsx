import { useToast } from '@chakra-ui/react'
import { useRef, FormEvent, useContext, useState } from 'react'
import { useRouter } from 'next/router'
 
import { Form, Input } from '../../../../components/common'
import { api } from '../../../../services/api'
import socketService from '../../../../services/socketService'
import { AuthContext } from '../../../../contexts/auth'
import RoomService from '../../../../services/roomService'


export function JoinRoomForm(){
  const router = useRouter()
  const toast = useToast()
  const { user } = useContext(AuthContext)
  const [isLoading, setIsloading] = useState(false)

  const enterRoomInputRef = useRef<HTMLInputElement>(null)

  const handleEnterRoom = async (event: FormEvent) => {
    event.preventDefault()
    const socket = socketService.socket
    const roomId = enterRoomInputRef.current.value
    const roomIdlength = roomId.split('').length

    if(!user){
      toast.closeAll()
      return toast({
        duration: 3500,
        title: 'Não logado',
        status: 'warning',
        description: 'Faça login com o google e tente novamente!',
        isClosable: true
      })
    }

    if(roomIdlength === 6){
      try {
        setIsloading(true)
        const isAbleToJoinRoom = await RoomService.joinGameRoomRequest(socket, roomId)

        setInterval(() => {
          if (!isAbleToJoinRoom) {
            setIsloading(false)
  
            toast({
              duration: 3500,
              title: 'Erro',
              status: 'error',
              description: "Tempo excedido!",
              isClosable: true
            })
          }
        }, 2000)

        if (isAbleToJoinRoom){
          setIsloading(false)
          const res = await api.get('/room', {
            params: {
              roomId
            }
          })
          
          console.log(res.data.room.id)

          router.push(`/room/${res.data.room.id}`)
        } else {
          setIsloading(false)
          toast({
            duration: 3500,
            title: 'Sala Cheia!',
            status: 'warning',
            description: 'Sala Cheia, Crie uma sala para jogar!',
            isClosable: true
          })
        }
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

  return (
    <Form
      submitAction={handleEnterRoom}
      heading="Entrar numa sala"
      submitButtonName="Buscar"
      isLoading={isLoading}
    >
      <Input
        name="roomId"
        type="number"
        placeholder="ID da sala"
        isRequired  
        ref={enterRoomInputRef}
      />
    </Form>
  )
}