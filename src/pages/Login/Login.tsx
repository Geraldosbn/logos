import { useEffect } from 'react'
import { Paper, Typography } from '@mui/material'
import { useStyles } from './style'
import { Button } from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useFormLogin } from './hook/useFormLogin'
import { InputTextField } from '../../components/InputTextField/InputTextField'

export interface LoginParams {
  username: string
  password: string
}

export const Login = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { login, isLoggedIn } = useAuth()
  const { register, handleSubmit, errors } = useFormLogin()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dataRegister', { replace: true })
    }
  }, [isLoggedIn])

  const handleLogin = (data: LoginParams) => {
    console.log('data', data)
    login(data)
  }

  return (
    <form>
      <Paper className={classes.paper} elevation={3}>
        <Typography>Área logada</Typography>
        <InputTextField
          label='Usuário'
          type='text'
          inputProps={{ ...register('username') }}
          error={!!errors.username}
          errorMessage={errors.username?.message}
        />
        <InputTextField
          label='Senha'
          type='password'
          inputProps={{ ...register('password') }}
          error={!!errors.password}
          errorMessage={errors.password?.message}
        />
        <Button type='submit' onClick={handleSubmit(handleLogin)}>
          Entrar
        </Button>
      </Paper>
    </form>
  )
}
