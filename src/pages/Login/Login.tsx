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
import { Login as LoginInterface } from '../../shared/interfaces/interfaces'

export const Login = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { isLoading, login, authentication } = useAuth()
  const { register, handleSubmit, errors } = useFormValidate(schemaLogin)

  useEffect(() => {
    authentication.isAuth && navigate('/main')
  }, [authentication])

  const handleLogin = (data: LoginInterface) => {
    login(data)
  }

  return (
    <div className={classes.container}>
      <PaperForm
        small
        onSubmit={handleSubmit(handleLogin)}>
        <Logo logo="nameBlack" />
        <InputTextField
          label="Usuário"
          autoComplete="login"
          disabled={isLoading}
          inputProps={{ ...register('login') }}
          error={!!errors.login}
          helperText={errors.login?.message as string}
        />
        <InputTextField
          label="Senha"
          type="password"
          autoComplete="current-password"
          disabled={isLoading}
          inputProps={{ ...register('password') }}
          error={!!errors.password}
          helperText={errors.password?.message as string}
        />
        <Button
          type="submit"
          isLoading={isLoading}>
          Entrar
        </Button>
      </PaperForm>
    </div>
  )
}
