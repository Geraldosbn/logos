import { Outlet } from 'react-router-dom'
import AppDrawer from '../../continers/AppDrawer/AppDrawer'

export const Main = () => {
  return (
    <AppDrawer>
      <Outlet />
    </AppDrawer>
  )
}
