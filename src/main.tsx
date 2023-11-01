import React from 'react'
import ReactDOM from 'react-dom/client'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import App from './App.tsx'
import globalTheme from './theme'
import { AuthProvider } from './context/AuthContext.tsx'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './lib/react-query.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
)
