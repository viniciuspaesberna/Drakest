import { ICharacter } from "./type";

export function selectCharacter(character: ICharacter) {
  return {
    type: 'SELECT_CHARACTER',
    payload: {
      character
    }
  }
}