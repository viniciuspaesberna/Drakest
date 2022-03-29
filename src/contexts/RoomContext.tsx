import { createContext, useState, ReactNode, useEffect } from "react"

interface RoomProviderProps{
  children: ReactNode
}

interface RoomContextData{
  selectedCharacter: boolean
  characters: Character[]
  setCharacters: (characters: Character[]) => void
}

type Character = {
  id: string
  sheet: CharacterSheet
}

export const RoomContext = createContext({} as RoomContextData)

export function RoomProvider({children}: RoomProviderProps){
  const [characters, setCharacters] = useState<Character[]>([])
  const [selectedCharacter, setSelectedCharacter] = useState(false)

  return (
    <RoomContext.Provider
      value={{
        selectedCharacter,
        characters,
        setCharacters
      }}
    >
      {children}
    </RoomContext.Provider>
  )
}