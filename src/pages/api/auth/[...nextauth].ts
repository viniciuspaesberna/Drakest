import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { query as q } from 'faunadb'

import { fauna } from '../../../services/fauna'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_CLIENT_KEY,
    })
  ],

  callbacks: {
    async signIn(user, account, profile){
      const { email } = user

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              {data: {email}}
            ),
            q.Get(
              q.Match(
                  q.Index('user_by_email'), 
                  q.Casefold(user.email)
              )
            )
          )
        )

        return true
      } catch {
        return false
      }
    },
  }
})