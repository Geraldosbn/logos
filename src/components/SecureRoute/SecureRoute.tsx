import { PathRouteProps, Route } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Login } from '../../pages/Login/Login'
import React from 'react'

interface SecureRouteProps extends PathRouteProps {
  element: React.ReactNode
}

export const SecureRoute = ({
  element,
  ...rest
}: SecureRouteProps): React.ReactElement | null => {
  const { isLoggedIn } = useAuth()

  return isLoggedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <Route path='/login' element={<Login />} />
  )
}
