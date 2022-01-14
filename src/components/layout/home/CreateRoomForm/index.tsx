import { FormEvent, useRef, useContext } from 'react'
import { FiHelpCircle } from 'react-icons/fi'
import { useRouter } from 'next/router'

import { useToast} from '@chakra-ui/react'

import { Form, Input } from '../../../../components/common'
import { api } from '../../../../services/api'
import { AuthContext } from '../../../../contexts/auth'
import roomService from '../../../../services/roomService'
import socketService from '../../../../services/socketService'

export function CreateRoomForm(){
  const router = useRouter()
  const toast = useToast()
  const { user } = useContext(AuthContext)

  const createRoomInputRef = useRef<HTMLInputElement>(null)

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault()

    if(!user) {
      toast.closeAll()
      return toast({
        duration: 3500,
        title: 'Não logado',
        status: 'warning',
        description: 'Faça login com o google e tente novamente!',
        isClosable: true
      })
    }
    
    try {
      const socket = socketService.socket
      const res = await api.post('/room', {
        name: createRoomInputRef.current.value
      })

      const isAbleToJoinRoom = await roomService.joinGameRoomRequest(socket, res.data.roomId)
      if(isAbleToJoinRoom) return router.push(`/room/${res.data.roomId}`)
    } catch {
      return toast({
        duration: 3500,
        title: 'Erro',
        status: 'error',
        description: 'Algo deu errado tente novamente!',
        isClosable: true
      })
    }
  }

  return (
    <Form
      submitAction={handleCreateRoom}
      heading="Criar uma sala"
      submitButtonName="Criar"
      icon={FiHelpCircle}
      iconTypeMessage="info"
      iconTitleMessage="Criação de sala"
      iconDescriptionMessage="Essa senha será utilizada para realizar ações como adiministrador da sala"
    >
      <Input
        name="roomName"
        type="text"
        placeholder="Nome da sala/RPG"
        ref={createRoomInputRef}
      />
    </Form>
  )
}