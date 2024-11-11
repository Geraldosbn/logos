import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert'
import { useNotification } from '../../context/NotificationContext'
import Collapse from '@mui/material/Collapse'
import { useStyles } from './style'

const Notification: React.FC = () => {
  const classes = useStyles()

  const { notification, resetNotification } = useNotification()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    !!notification.message && setOpen(true)
  }, [notification.message])

  const handleClose = () => {
    resetNotification()
    setOpen(false)
  }

  return (
    <div className={classes.notification}>
      <Collapse
        in={open}
        sx={{ width: 500 }}>
        <Alert
          variant="filled"
          severity={notification.type}
          onClose={handleClose}>
          {notification.message}
        </Alert>
      </Collapse>
    </div>
  )
}

export default Notification
