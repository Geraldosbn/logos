import { useEffect } from 'react'
import { Typography } from '@mui/material'
import { schemaForm } from './schemaForm'
import { useStyles } from './style'
import { useMemberRegister } from './service/useMemberRegister'
import { useFormValidate } from '../../hooks/useFormValidate'
import { InputTextField } from '../../components/InputTextField/InputTextField'
import { Button } from '../../components/Button/Button'
import { PaperForm } from '../../components/PaperForm/PaperForm'
import { InputDate } from '../../components/InputDate/InputDate'
import { InputMask } from '../../components/InputMask/InputMask'
import { MemberData, MemberDataInput } from '../../shared/interfaces/interfaces'

export const MemberRegister = () => {
  const classes = useStyles()
  const { mutateAsync: onSubmit, isSuccess, reset } = useMemberRegister()

  const { register, errors, handleSubmit, setValue, clearErrors } = useFormValidate(schemaForm())

  useEffect(() => {
    isSuccess && reset()
  }, [isSuccess])

  const handleSubmitForm = (data: MemberDataInput) => {
    const { name, phone, birthday, cpf, rg, emissorRG } = data
    const memberData: MemberData = {
      person: {
        name,
        birthday,
        personData: {
          phone,
          personDocuments: {
            cpf,
            rg,
            emissorRG
          }
        }
      }
    }

    onSubmit(memberData)
  }

  return (
    <PaperForm onSubmit={handleSubmit(handleSubmitForm)}>
      <Typography className={classes.title}>Cadastrar membro</Typography>
      <InputTextField
        label="Nome"
        inputProps={{ ...register('name') }}
        error={!!errors.name}
        helperText={errors.name?.message as string}
      />
      <InputMask
        label="Telefone"
        type="phone"
        setValueOnBlur={(value) => {
          setValue('phone', value)
        }}
        inputProps={{
          ...register('phone')
        }}
        error={!!errors.phone}
        helperText={errors.phone?.message as string}
      />
      <InputMask
        label="CPF"
        type="cpf"
        setValueOnBlur={(value) => {
          setValue('cpf', value)
        }}
        inputProps={{ ...register('cpf') }}
        error={!!errors.cpf}
        helperText={errors.cpf?.message as string}
      />
      <InputMask
        label="RG"
        type="rg"
        setValueOnBlur={(value) => {
          setValue('rg', value)
        }}
        inputProps={{ ...register('rg') }}
        error={!!errors.rg}
        helperText={errors.rg?.message as string}
      />
      <InputTextField
        label="Emissor RG"
        inputProps={{ ...register('emissorRG') }}
        error={!!errors.emissorRG}
        helperText={errors.emissorRG?.message as string}
      />
      <InputDate
        label="Data de nascimento"
        onChange={(value) => setValue('birthday', value)}
        inputProps={{
          ...register('birthday')
        }}
        clearError={() => clearErrors('birthday')}
        error={!!errors.birthday}
        helperText={errors.birthday?.message as string}
      />
      <Button type="submit">Salvar</Button>
    </PaperForm>
  )
}
