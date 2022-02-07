import { createContext, useState, ReactNode, useEffect } from "react"

interface RoomProviderProps{
  children: ReactNode
}

interface RoomContextData{
  selectedCharacter: boolean
}

export const RoomContext = createContext({} as RoomContextData)

export function RoomProvider({children}: RoomProviderProps){
  const [selectedCharacter, setSelectedCharacter] = useState(false)

  return (
    <RoomContext.Provider
      value={{
        selectedCharacter
      }}
    >
      {children}
    </RoomContext.Provider>
  )
}