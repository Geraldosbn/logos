import { createContext, useState, ReactNode, useEffect, useContext } from 'react'
import { loginRequest } from './service/loginService'
import { Login } from '../shared/interfaces/interfaces'

interface IsAuthAndToken {
  isAuth: boolean
  token: string
}

interface AuthContextType {
  isLoading: boolean
  authentication: IsAuthAndToken
  login: ({ login, password }: Login) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

const authInitialState: IsAuthAndToken = { isAuth: false, token: '' }

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoading, setisLoading] = useState(true)
  const [authentication, setAuthentication] = useState<IsAuthAndToken>(authInitialState)

  useEffect(() => {
    const token = localStorage.getItem('token')
    token !== null && setAuthentication({ isAuth: true, token })
    setisLoading(false)
  }, [])

  const login = async (data: Login) => {
    setisLoading(true)
    const token = await loginRequest(data)

    if (typeof token === 'string' && token !== '') {
      setAuthentication({ isAuth: true, token })
      return localStorage.setItem('token', token)
    }
    setisLoading(false)
    return logout()
  }

  const logout = () => {
    setAuthentication(authInitialState)
    localStorage.removeItem('token')
  }

  return <AuthContext.Provider value={{ authentication, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}
