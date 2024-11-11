import { AlertColor } from '@mui/material'
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface Notification {
  type: AlertColor
  message: string | null
}

interface NotificationContextType {
  notification: Notification
  notify: (type: AlertColor, message: string) => void
  resetNotification: () => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}

interface NotificationProviderProps {
  children: ReactNode
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notification, setNotification] = useState<Notification>({ type: 'error', message: null })

  const notify = useCallback((type: AlertColor, message: string) => {
    setNotification({ type, message })
  }, [])

  const resetNotification = useCallback(() => {
    setNotification({ type: 'error', message: null })
  }, [])

  return <NotificationContext.Provider value={{ notification, notify, resetNotification }}>{children}</NotificationContext.Provider>
}
