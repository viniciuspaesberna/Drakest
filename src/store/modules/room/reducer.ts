import { Reducer } from "redux"
import { IRoomState } from "./type"

const INITIAL_STATE: IRoomState = {
  selectedCharacter: null,
  characters: []
}

const room: Reducer<IRoomState> = () => {
  return INITIAL_STATE
}

export default room