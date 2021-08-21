import React, { createContext, useContext, useState } from 'react'

type User = {
  id: string
  username: string
  firstName: string
  avatar: string
  email: string
  token: string
}

type AuthContextData = {
  user: User
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user] = useState<User>({
    id: '1',
    username: 'tresende',
    firstName: 'Thiago',
    avatar: 'https://github.com/tresende.png',
    email: 'thiago.gcresende@gmail.com',
    token: '112-312-31-312-312'
  } as User)
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

export { useAuth, AuthProvider }
