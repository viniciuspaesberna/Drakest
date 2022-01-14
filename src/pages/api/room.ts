import { query as q } from "faunadb"
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

import { fauna } from "../../services/fauna"
import gameService from "../../services/roomService";
import socketService from "../../services/socketService";
import { generateRoomId } from "../../utils/generateRandomRoomId";

type User = {
  data: {
    email: string
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const socket = socketService.socket

  if (req.method === 'GET'){
    const { roomId } = req.query

    const currentRoom: any = await fauna.query(
      q.Get(
        q.Match(
          q.Index('room_by_id'),
          roomId
        )
      )
    )

    // console.log(currentRoom)

    if(!!currentRoom){
      return res.status(200).json({room: currentRoom.data })
    } else {
      return res.status(404).json({error: "Room id not found"})
    } 
  }

  
  if (req.method === 'POST'){
    const session = await getSession({req})
 
    const { name } = req.body

    const roomId = generateRoomId()
    
    if(!session){
      return res.status(404).json({error: "user not found"})
    }

    const user = await fauna.query<User>(
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold(session.user.email)
        )
      )
    )

    await fauna.query(
      q.If(
        q.Not(
          q.Exists(
            q.Match(
              q.Index('room_by_id'),
              q.Casefold(roomId)
            )
          )
        ),
        q.Create(
          q.Collection('rooms'),
          {data: {
            id: roomId, 
            room_owner: user.data.email,
            name
          }}
        ),
        q.Get(
          q.Match(
            q.Index('room_by_id'), 
            q.Casefold(roomId)
          )
        )
      )
    )

    // const roomId = gameService.createRoom(socket, session.user.email)

    return res.status(202).json({roomId})
  }
}