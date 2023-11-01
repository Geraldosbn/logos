import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext
} from 'react'
import { LoginParams } from '../pages/Login/Login'

interface AuthContextType {
  idle: boolean
  isLoggedIn: boolean
  login: ({ username, password }: LoginParams) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [idle, setIdle] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIdle(false)
    const savedIsLoggedIn = localStorage.getItem('isLoggedIn')
    if (savedIsLoggedIn === 'true') {
      setIsLoggedIn(true)
      setIdle(false)
    }
  }, [])

  const login = ({ username, password }: LoginParams) => {
    if (username === 'admin' && password === '123') {
      setIsLoggedIn(true)
      localStorage.setItem('isLoggedIn', 'true')
    }
  }

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
  }

  return (
    <AuthContext.Provider value={{ idle, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}
