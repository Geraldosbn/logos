import {Navigate, Outlet} from 'react-router-dom'
import AppDrawer from '../../containers/AppDrawer/AppDrawer'
import {useAuth} from '../../context/AuthContext'

export const Main = () => {
  const {authentication, loading} = useAuth()

  if (!authentication.isAuth && !loading) return <Navigate to="/" />
  return (
    <AppDrawer>
      <Outlet />
    </AppDrawer>
  )
}
