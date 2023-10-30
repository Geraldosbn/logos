import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import { Container, Fade, Paper } from '@mui/material'
import { Transition } from './Transition'
import { useStyles } from './style'

interface FullScreenDialogProps {
  label: string
  content: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

export default function FullScreenDialog({
  label,
  content,
  isOpen,
  onClose
}: FullScreenDialogProps) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              {label}
            </Typography>
          </Toolbar>
        </AppBar>
        <Fade in timeout={600}>
          <Container maxWidth='md'>
            <Paper elevation={3} className={classes.paper}>
              {content}
            </Paper>
          </Container>
        </Fade>
      </Dialog>
    </div>
  )
}
