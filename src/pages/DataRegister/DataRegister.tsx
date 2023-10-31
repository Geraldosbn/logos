import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useEffect } from 'react'

export const DataRegister = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/', { replace: true })
    }
  }, [])

  return <div>DataRegister</div>
}
