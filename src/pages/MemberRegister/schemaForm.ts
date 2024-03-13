import * as Yup from 'yup'

interface SchemaFormParams {
  isUserSystem: boolean
  passwordError: boolean
}

export const schemaForm = ({
  isUserSystem,
  passwordError
}: SchemaFormParams) => {
  const setPasswordSchema = (isUserSystem: boolean, passwordError: boolean) => {
    const baseSchema = Yup.string()

    if (isUserSystem) {
      return baseSchema.required('Campo obrigatório.').when({
        is: () => passwordError,
        then: () =>
          Yup.string().oneOf([Yup.ref('password')], 'As senhas não conferem')
      })
    } else {
      return baseSchema
    }
  }

  const userNameSchema = isUserSystem
    ? Yup.string().required('Campo obrigatório.')
    : Yup.string()

  return Yup.object().shape({
    name: Yup.string().required('Campo obrigatório.'),
    phone: Yup.string().required('Campo obrigatório.'),
    cpf: Yup.string().required('Campo obrigatório.'),
    birthday: Yup.string().required('Campo obrigatório.'),
    username: userNameSchema,
    password: setPasswordSchema(isUserSystem, passwordError),
    confirmPassword: setPasswordSchema(isUserSystem, passwordError)
  })
}
