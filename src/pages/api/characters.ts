import { NextApiRequest, NextApiResponse } from "next";
import { v4 } from 'uuid'

import { fauna } from "../../services/fauna";
import { query as q } from "faunadb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { data } = req.body

    const id = v4()

    console.log(data.user)

    await fauna.query(
      q.If(
        q.Not(
          q.Exists(
            q.Match(
              q.Index('character_by_id'),
              q.Casefold(id)
            )
          )
        ),
        q.Create(
          q.Collection('characters'),
          {data: {
            id,
            owner: data.user.email,
            characterSheet: data.characterSheet
          }}
        ),
        q.Get(
          q.Match(
            q.Index('character_by_id'),
            q.Casefold(id)
          )
        )
      )
    )

    res.status(202).json({success: "Character registered!"})
  }

  if(req.method === "GET") {
    const { email } = req.query

    const charactersRefs = await fauna.query<any>(
      q.Paginate(
        q.Intersection([
          q.Match(
            q.Index("characters_by_user"),
            email
          )
        ])
      )
    )

    const charactersRefStrings = charactersRefs.data.map((ref: any) => ref.id)
    

    const characters = await fauna.query<any>(
      q.Map(
        [...charactersRefStrings],
        q.Lambda(
          "ref",
          q.Get(
            q.Ref(
              q.Collection("characters"),
              q.Var("ref")
            )
          ) 
        )
      )
    )
    
    if(!!characters) {
      res.status(200).json({ characters })
    } else {
      res.status(404).json({ error: "Characters not found!"})
    }
  }
}