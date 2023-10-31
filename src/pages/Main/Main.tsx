import { Outlet } from 'react-router-dom'
import AppDrawer from '../../containers/AppDrawer/AppDrawer'

export const Main = () => {
  return (
    <AppDrawer>
      <Outlet />
    </AppDrawer>
  )
}
