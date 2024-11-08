import * as Yup from 'yup'

export const schemaLogin = Yup.object().shape({
  login: Yup.string().required('Campo obrigatório.'),
  password: Yup.string().required('Campo obrigatório.')
})
