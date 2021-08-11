import { ReactNode, useState } from "react"
import { createContext } from "react"
import useSound from "use-sound"

interface DicesProviderProps{
  children: ReactNode
}

interface DicesContextData{
  dicesValues: number[]
  handleRollDices: (diceSize: number, diceAmount?: number, amplifier?: number) => void
}

export const DicesContext = createContext({} as DicesContextData)

export function DicesProvider({children}: DicesProviderProps){
  const [dicesValues, setDicesValues] = useState<number[]>()
  const [play] = useSound('/sounds/dices.mp3')

  function rollDices(diceSize: number, amplifier = 0){
    const dicesValues = Math.floor((Math.random() * diceSize) + 1) + amplifier
    return dicesValues
  }

  function handleRollDices(diceSize: number, diceAmount: number, amplifier?: number ){
    let dicesValues: number[] = []

    for(let i = 0; i < diceAmount; i++){
      dicesValues.push(rollDices(diceSize, amplifier))
    }

    play()

    setDicesValues(dicesValues)
  }

  return (
    <DicesContext.Provider value={{dicesValues, handleRollDices}}>
      {children}
    </DicesContext.Provider>
  )
}