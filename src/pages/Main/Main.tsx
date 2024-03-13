import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AppDrawer from '../../containers/AppDrawer/AppDrawer'
import { useAuth } from '../../context/AuthContext'

export const Main = () => {
  const { pathname } = useLocation()

  const { isLoggedIn } = useAuth()

  if (!isLoggedIn && pathname === '/main') return <Navigate to='/' />
  return (
    <AppDrawer>
      <Outlet />
    </AppDrawer>
  )
}
