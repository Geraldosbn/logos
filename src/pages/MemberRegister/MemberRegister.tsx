import { useState } from 'react'
import { Paper, Typography } from '@mui/material'
import { schemaForm } from './schemaForm'
import { useStyles } from './style'
import { useFormValidate } from '../../hooks/useFormValidate'
import { InputTextField } from '../../components/InputTextField/InputTextField'
import { Button } from '../../components/Button/Button'
import { CheckBox } from '../../components/CheckBox/CheckBox'
//import { Post } from '../../../../shared/interfaces/interfaces'

export const MemberRegister = () => {
  const classes = useStyles()
  // const { mutateAsync: onSubmit, isSuccess } = useMemberRegister()

  const [isUserSystem, setIsUserSystem] = useState(false)
  const [passwords, setPasswords] = useState<{
    password: string
    confirmPassword: string
  }>({ password: '', confirmPassword: '' })

  const { register, errors, handleSubmit } = useFormValidate(
    schemaForm({
      isUserSystem,
      passwordError: passwords.password !== passwords.confirmPassword
    })
  )

  // useEffect(() => {
  //   if (isSuccess) {
  //     reset()
  //     alert('artigo criado com sucesso.')
  //   }
  // }, [isSuccess])

  const handleSubmitForm = () => {
    //  onSubmit({ data, typePost }) data: Post
  }

  return (
    <Paper className={classes.paper} elevation={3}>
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Typography className={classes.title}>Cadastrar membro</Typography>
        <InputTextField
          label='Nome'
          inputProps={{ ...register('name') }}
          error={!!errors.name}
          errorMessage={errors.name?.message as string}
        />
        <InputTextField
          label='Telefone'
          type='number'
          inputProps={{ ...register('phone') }}
          error={!!errors.phone}
          errorMessage={errors.phone?.message as string}
        />
        <InputTextField
          label='CPF'
          inputProps={{ ...register('cpf') }}
          error={!!errors.cpf}
          errorMessage={errors.cpf?.message as string}
        />
        <InputTextField
          label='Data de nascimento'
          inputProps={{ ...register('birthday') }}
          error={!!errors.birthday}
          errorMessage={errors.birthday?.message as string}
        />
        {isUserSystem && (
          <div style={{ width: '100%' }}>
            <InputTextField
              label='Login'
              autoComplete='username'
              inputProps={{ ...register('username') }}
              error={!!errors.username}
              errorMessage={errors.username?.message as string}
            />
            <InputTextField
              label='Senha'
              type='password'
              autoComplete='new-password'
              onChange={evt =>
                setPasswords({ ...passwords, password: evt.target.value })
              }
              inputProps={{ ...register('password') }}
              error={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            <InputTextField
              label='confirme a senha'
              type='password'
              autoComplete='new-password'
              onChange={evt =>
                setPasswords({
                  ...passwords,
                  confirmPassword: evt.target.value
                })
              }
              inputProps={{ ...register('confirmPassword') }}
              error={!!errors.confirmPassword}
              errorMessage={errors.confirmPassword?.message as string}
            />
          </div>
        )}
        <CheckBox
          label='Este membro é um usuario do sistema?'
          onclick={setIsUserSystem}
        />
        <Button type='submit'>Salvar</Button>
      </form>
    </Paper>
  )
}
