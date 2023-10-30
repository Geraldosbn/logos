import { Outlet } from 'react-router-dom'
import AppDrawer from '../../continers/AppDrawer/AppDrawer'

function Home() {
  return (
    <AppDrawer>
      <Outlet />
    </AppDrawer>
  )
}

export default Home
