import { useEffect } from 'react'
import { Paper, TextField, Typography } from '@mui/material'
import { useStyles } from './style'
import { Button } from '../../components/Button/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export interface LoginParams {
  username: string
  password: string
}

export const Login = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { login, isLoggedIn } = useAuth()
  const [loginParams, setLoginParams] = useState<LoginParams>({
    username: '',
    password: ''
  })

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dataRegister', { replace: true })
    }
  }, [isLoggedIn])

  const handleLogin = () => {
    login(loginParams)
  }
  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography>Área logada</Typography>
      <TextField
        label='Usuário'
        onChange={e =>
          setLoginParams({ ...loginParams, username: e.target.value })
        }
      />
      <TextField
        label='Senha'
        onChange={e =>
          setLoginParams({ ...loginParams, password: e.target.value })
        }
      />
      <Button onClick={handleLogin}>Entrar</Button>
    </Paper>
  )
}
