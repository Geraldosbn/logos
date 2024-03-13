import { useEffect } from 'react'
import { Paper } from '@mui/material'
import { useStyles } from './style'
import { Button } from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useFormValidate } from '../../hooks/useFormValidate'
import { InputTextField } from '../../components/InputTextField/InputTextField'
import { schemaLogin } from './schema/loginSchema'
import { Logo } from '../../components/Logo/Logo'

export interface LoginParams {
  username: string
  password: string
}

export const Login = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { login, isLoggedIn } = useAuth()
  const { register, handleSubmit, errors } = useFormValidate(schemaLogin)

  useEffect(() => {
    isLoggedIn && navigate('/main')
  }, [isLoggedIn])

  const handleLogin = (data: LoginParams) => {
    login(data)
  }

  return (
    <div className={classes.container}>
      <form>
        <Paper className={classes.paper} elevation={3}>
          <Logo logo='nameBlack' />
          <InputTextField
            label='Usuário'
            type='text'
            inputProps={{ ...register('username') }}
            error={!!errors.username}
            errorMessage={errors.username?.message as string}
          />
          <InputTextField
            label='Senha'
            type='password'
            autoComplete='current-password'
            inputProps={{ ...register('password') }}
            error={!!errors.password}
            errorMessage={errors.password?.message as string}
          />
          <Button type='submit' onClick={handleSubmit(handleLogin)}>
            Entrar
          </Button>
        </Paper>
      </form>
    </div>
  )
}
