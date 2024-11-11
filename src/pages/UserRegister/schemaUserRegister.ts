import * as Yup from 'yup'

interface SchemaFormParams {
  passwordError: boolean
}

export const schemaForm = ({ passwordError }: SchemaFormParams) => {
  const passwordSchema = Yup.string()
    .required('Campo obrigatório.')
    .when({
      is: () => passwordError,
      then: () => Yup.string().oneOf([Yup.ref('password')], 'As senhas não conferem')
    })

  return Yup.object().shape({
    login: Yup.string().required('Campo obrigatório.'),
    password: passwordSchema,
    confirmPassword: passwordSchema
  })
}
