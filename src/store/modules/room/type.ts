export interface ICharacter {
  id: string
  sheet: CharacterSheet
}

export interface IRoomState {
  selectedCharacter: boolean | null
  characters: ICharacter[]
}