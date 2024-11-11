import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { schemaForm } from './schemaUserRegister'
import { useStyles } from './style'

import { useFormValidate } from '../../hooks/useFormValidate'
import { InputTextField } from '../../components/InputTextField/InputTextField'
import { Button } from '../../components/Button/Button'
import { PaperForm } from '../../components/PaperForm/PaperForm'
import { Login, Role, UserAdmin } from '../../shared/interfaces/interfaces'
import { useUserRegister } from './service/useUserRegister'
import { CheckBox } from '../../components/CheckBox/CheckBox'

export const UserRegister = () => {
  const classes = useStyles()
  const { mutateAsync: onSubmit, isSuccess } = useUserRegister()
  const [isAdmin, setIsAdmin] = useState(false)
  const [passwords, setPasswords] = useState<{
    password: string
    confirmPassword: string
  }>({ password: '', confirmPassword: '' })

  const { register, errors, handleSubmit, reset } = useFormValidate(
    schemaForm({
      passwordError: passwords.password !== passwords.confirmPassword
    })
  )

  useEffect(() => {
    isSuccess && reset()
  }, [isSuccess])

  const handleSubmitForm = (data: Login) => {
    const { login, password } = data
    const userData: UserAdmin = {
      login,
      password,
      role: isAdmin ? Role.ADMIN : Role.USER
    }
    onSubmit(userData)
  }

  return (
    <PaperForm onSubmit={handleSubmit(handleSubmitForm)}>
      <Typography className={classes.title}>Cadastrar usuário</Typography>
      <div style={{ width: '100%' }}>
        <InputTextField
          label="Login"
          autoComplete="login"
          inputProps={{ ...register('login') }}
          error={!!errors.login}
          helperText={errors.login?.message as string}
        />
        <InputTextField
          label="Senha"
          type="password"
          autoComplete="new-password"
          onChange={(evt) => setPasswords({ ...passwords, password: evt.target.value })}
          inputProps={{ ...register('password') }}
          error={!!errors.password}
          helperText={errors.password?.message as string}
        />
        <InputTextField
          label="confirme a senha"
          type="password"
          autoComplete="new-password"
          onChange={(evt) =>
            setPasswords({
              ...passwords,
              confirmPassword: evt.target.value
            })
          }
          inputProps={{ ...register('confirmPassword') }}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message as string}
        />
        <CheckBox
          label="Este usuário pode gerenciar entradas e saídas?"
          onclick={setIsAdmin}
        />
      </div>
      <Button type="submit">Salvar</Button>
    </PaperForm>
  )
}
