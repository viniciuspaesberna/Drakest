import { useSession } from "next-auth/client"
import { createContext, ReactNode, useState, useContext } from "react"
import useSound from "use-sound"
import roomService from "../services/roomService"
import socketService from "../services/socketService"
import { AuthContext } from "./auth"

interface DicesProviderProps{
  roomId: string
  children: ReactNode
}

interface DicesContextData{
  dicesValues: number[]
  handleRollDices: (diceSize: number, diceAmount?: number, amplifier?: number) => void
  setDicesValues: (values: number[]) => void
  play: () => void
}

export const DicesContext = createContext({} as DicesContextData)

export function DicesProvider({ children, roomId }: DicesProviderProps){
  const [dicesValues, setDicesValues] = useState<number[]>()
  const [play] = useSound('/sounds/dices.mp3')
  const { user } = useContext(AuthContext)

  

  async function handleRollDices(diceSize: number, diceAmount: number, amplifier?: number ){
    play()
    const socket = socketService.socket
    await roomService.handleRollDice(socket, { diceAmount, diceSize, amplifier }, user, roomId)
    setDicesValues(dicesValues)
  }

  return (
    <DicesContext.Provider value={{dicesValues, handleRollDices, setDicesValues, play}}>
      {children}
    </DicesContext.Provider>
  )
}