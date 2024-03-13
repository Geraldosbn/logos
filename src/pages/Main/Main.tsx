import { Navigate, Outlet } from 'react-router-dom'
import AppDrawer from '../../containers/AppDrawer/AppDrawer'
import { useAuth } from '../../context/AuthContext'

export const Main = () => {
  const { isLoggedIn = false } = useAuth()
  if (!isLoggedIn) return <Navigate to='/' />
  return (
    <AppDrawer>
      <Outlet />
    </AppDrawer>
  )
}
