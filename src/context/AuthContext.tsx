import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext
} from 'react'
import { LoginParams } from '../pages/Login/Login'

interface AuthContextType {
  isLoggedIn: boolean
  login: ({ username, password }: LoginParams) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const savedIsLoggedIn = localStorage.getItem('isLoggedIn')
    if (savedIsLoggedIn === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const login = ({ username, password }: LoginParams) => {
    if (username === 'admin' && password === '') {
      setIsLoggedIn(true)
      localStorage.setItem('isLoggedIn', 'true')
    }
  }

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
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
