import { createContext, useState, ReactNode, useEffect } from "react"

interface CurrentCharacterSheetContextProviderProps{
  children: ReactNode
}

interface CurrentCharacterSheetContextData{
  currentCharacter: string
  setCurrentCharacter: (value: string) => void

  strengthAmplifier: string
  dexterityAmplifier: string
  constitutionAmplifier: string
  intelligenceAmplifier: string
  wisdomAmplifier: string
  charismaAmplifier: string
  setStrengthAmplifier: (value: string) => void
  setDexterityAmplifier: (value: string) => void
  setConstitutionAmplifier: (value: string) => void
  setIntelligenceAmplifier: (value: string) => void
  setWisdomAmplifier: (value: string) => void
  setCharismaAmplifier: (value: string) => void

  proficiencyBonus: string
  setProficiencyBonus: (value: string) => void
}

export const CurrentCharacterSheetContext = createContext({} as CurrentCharacterSheetContextData)

export function CurrentCharacterSheetContextProvider({children}: CurrentCharacterSheetContextProviderProps){
  const [currentCharacter, setCurrentCharacter] = useState('')
  
  const [strengthAmplifier, setStrengthAmplifier] = useState('')
  const [dexterityAmplifier, setDexterityAmplifier] = useState('')
  const [constitutionAmplifier, setConstitutionAmplifier] = useState('')
  const [intelligenceAmplifier, setIntelligenceAmplifier] = useState('')
  const [wisdomAmplifier, setWisdomAmplifier] = useState('')
  const [charismaAmplifier, setCharismaAmplifier] = useState('')

  const [proficiencyBonus, setProficiencyBonus] = useState('')

  return (
    <CurrentCharacterSheetContext.Provider
      value={{
        currentCharacter,
        setCurrentCharacter,

        strengthAmplifier,
        dexterityAmplifier,
        constitutionAmplifier,
        intelligenceAmplifier,
        wisdomAmplifier,
        charismaAmplifier,

        setStrengthAmplifier,
        setDexterityAmplifier,
        setConstitutionAmplifier,
        setIntelligenceAmplifier,
        setWisdomAmplifier,
        setCharismaAmplifier,

        proficiencyBonus,
        setProficiencyBonus,
      }}
    >
      {children}
    </CurrentCharacterSheetContext.Provider>
  )
}