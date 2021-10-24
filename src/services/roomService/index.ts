import { Socket } from "socket.io-client";

class RoomService {
  public async joinGameRoomRequest(socket: Socket, roomId: string ): Promise<boolean>{
    return new Promise((rs, rj) => {
      socket.emit("join_game_request", { roomId })
      socket.on("room_able_to_join", () => rs(true))
      socket.on("room_join_error", () => rj(false))
    })
  }

  public async handleRollDice(socket: Socket, { diceAmount, diceSize, amplifier }, user: User, roomId: string ) {
    socket.emit("roll_dices", { diceInfo: { diceAmount, diceSize, amplifier }, user, roomId})
  }

  public async dicesRolled(socket: Socket, listiner: (rollInfos: any) => void) {
    socket.on("rolled_dices_values", ({ rollInfos }) => listiner(rollInfos))
  }
}

export default new RoomService()