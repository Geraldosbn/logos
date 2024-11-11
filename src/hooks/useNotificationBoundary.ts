import { useState, useCallback } from 'react'

type NotificationType = 'success' | 'error' | 'warning' | null

interface Notification {
  type: NotificationType
  message: string | null
}

function useNotificationBoundary() {
  const [notification, setNotification] = useState<Notification>({ type: null, message: null })

  const notify = useCallback((type: NotificationType, message: string) => {
    setNotification({ type, message })
  }, [])

  const resetNotification = useCallback(() => {
    setNotification({ type: null, message: null })
  }, [])

  return { notification, notify, resetNotification }
}

export default useNotificationBoundary
