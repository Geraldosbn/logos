import * as Yup from 'yup'

export const schemaLogin = Yup.object().shape({
  username: Yup.string().required('Campo obrigatório.'),
  password: Yup.string().required('Campo obrigatório.')
})
