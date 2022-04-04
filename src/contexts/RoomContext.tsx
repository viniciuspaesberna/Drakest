import { createContext, useState, ReactNode, useEffect } from "react"

interface RoomProviderProps{
  children: ReactNode
}

interface RoomContextData{
  selectedCharacter: Character
  characters: Character[]
  setCharacters: (characters: Character[]) => void
  setSelectedCharacter: (character: Character) => void
}

export const RoomContext = createContext({} as RoomContextData)

export function RoomProvider({children}: RoomProviderProps){
  const [characters, setCharacters] = useState<Character[]>([])
  const [selectedCharacter, setSelectedCharacter] = useState<Character>()

  useEffect(() => {
    if ( selectedCharacter) {
      setCharacters([...characters, selectedCharacter])
    }
  }, [selectedCharacter])

  return (
    <RoomContext.Provider
      value={{
        selectedCharacter,
        characters,
        setCharacters,
        setSelectedCharacter
      }}
    >
      {children}
    </RoomContext.Provider>
  )
}