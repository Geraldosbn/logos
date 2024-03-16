import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext
} from 'react'
import { LoginParams } from '../pages/Login/Login'

interface AuthContextType {
  loading: boolean
  isAuth: boolean
  login: ({ username, password }: LoginParams) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const isAuthStorage = localStorage.getItem('isAuth')
    isAuthStorage === 'true' && setIsAuth(true)
    setLoading(false)
  }, [])

  const login = ({ username, password }: LoginParams) => {
    if (username === 'admin' && password === '123') {
      setIsAuth(true)
      localStorage.setItem('isAuth', 'true')
    }
  }

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('isAuth')
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, loading }}>
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
