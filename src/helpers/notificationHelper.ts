import { useNotification } from '../context/NotificationContext'

let notifyFn: ((type: 'success' | 'error' | 'warning', message: string) => void) | null = null

export function NotificationHelperProvider({ children }: { children: React.ReactNode }) {
  const { notify } = useNotification()
  notifyFn = notify
  return children
}

export function notify(type: 'success' | 'error' | 'warning', message: string) {
  if (notifyFn) notifyFn(type, message)
}
