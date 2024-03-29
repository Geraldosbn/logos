import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { AppBar, DrawerHeader, Main, drawerWidth } from './style'
import { listItems } from './utils/listItem'
import { Logo } from '../../components/Logo/Logo'
import { useAuth } from '../../context/AuthContext'
import { Logout } from '@mui/icons-material'

interface AppDrawerProps {
  children?: React.ReactNode
}

export default function AppDrawer({ children }: AppDrawerProps) {
  const { logout } = useAuth()
  const [open, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(prev => !prev)
  }

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              mr: 2,
              ...(open && { display: 'none' }),
              position: 'absolute'
            }}
          >
            <MenuIcon />
          </IconButton>
          <Logo logo='nameWhite' />
          <IconButton
            color='inherit'
            aria-label='logout'
            onClick={logout}
            edge='end'
          >
            <Logout />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          height: '100%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerOpen}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {listItems.map(({ label, to, icon }) => (
          <div key={label}>
            <ListItem disablePadding>
              <ListItemButton LinkComponent={'a'} href={to}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </div>
        ))}
      </Drawer>
      <Main open={open}>{children}</Main>
    </Box>
  )
}
