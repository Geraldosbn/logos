import { useEffect } from 'react'
import { useStyles } from './style'
import { Button } from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useFormValidate } from '../../hooks/useFormValidate'
import { InputTextField } from '../../components/InputTextField/InputTextField'
import { schemaLogin } from './schema/loginSchema'
import { Logo } from '../../components/Logo/Logo'
import { PaperForm } from '../../components/PaperForm/PaperForm'

export interface LoginParams {
  username: string
  password: string
}

export const Login = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { login, isAuth } = useAuth()
  const { register, handleSubmit, errors } = useFormValidate(schemaLogin)

  useEffect(() => {
    isAuth && navigate('/main')
  }, [isAuth])

  const handleLogin = (data: LoginParams) => {
    login(data)
  }

  return (
    <div className={classes.container}>
      <PaperForm small onSubmit={handleSubmit(handleLogin)}>
        <Logo logo='nameBlack' />
        <InputTextField
          label='Usuário'
          autoComplete='username'
          inputProps={{ ...register('username') }}
          error={!!errors.username}
          helperText={errors.username?.message as string}
        />
        <InputTextField
          label='Senha'
          type='password'
          autoComplete='current-password'
          inputProps={{ ...register('password') }}
          error={!!errors.password}
          helperText={errors.password?.message as string}
        />
        <Button type='submit'>Entrar</Button>
      </PaperForm>
    </div>
  )
}
