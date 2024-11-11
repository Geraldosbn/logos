import React from 'react'
import ReactDOM from 'react-dom/client'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import App from './App.tsx'
import globalTheme from './theme'
import { AuthProvider } from './context/AuthContext.tsx'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './lib/react-query.ts'
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary.tsx'
import { NotificationProvider } from './context/NotificationContext.tsx'
import { NotificationHelperProvider } from './helpers/notificationHelper.ts'
import Notification from './components/Notification/Notification.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NotificationProvider>
      <NotificationHelperProvider>
        <ErrorBoundary>
          <Notification />
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={globalTheme}>
              <CssBaseline />
              <AuthProvider>
                <App />
              </AuthProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      </NotificationHelperProvider>
    </NotificationProvider>
  </React.StrictMode>
)
