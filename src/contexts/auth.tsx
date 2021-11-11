import { signOut, useSession } from "next-auth/client"
import { createContext, useState, ReactNode, useEffect } from "react"

interface AuthProviderProps{
  children: ReactNode
}

interface AuthContextData{
  user: User | null
  customSignOut: () => void
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<User | null>(null)
  const [session, loading] = useSession()

  
  useEffect(() => {
    if(session && !loading){
      setUser(session.user)
      localStorage.setItem("@Auth:currentUser", JSON.stringify({
        ...session.user
      }))
    }
  }, [session])
  
  useEffect(() => {
    const newUser = JSON.parse(localStorage.getItem("@Auth:currentUser"))
    setUser(newUser)
  }, [])

  function customSignOut() {
    signOut()
    localStorage.setItem("@Auth:currentUser", null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        customSignOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}