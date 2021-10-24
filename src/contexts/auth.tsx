import { useSession } from "next-auth/client"
import { createContext, useState, ReactNode, useEffect } from "react"

interface AuthProviderProps{
  children: ReactNode
}

interface AuthContextData{
  user: User | null
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<User | null>(null)
  const [session, loading] = useSession()

  useEffect(() => {
    if(session && !loading){
      setUser(session.user)
    }
  }, [session])


  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}