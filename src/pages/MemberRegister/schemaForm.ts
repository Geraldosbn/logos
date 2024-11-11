import * as Yup from 'yup'

export const schemaForm = () => {
  return Yup.object().shape({
    name: Yup.string().required('Campo obrigatório.'),
    phone: Yup.string().required('Campo obrigatório.'),
    cpf: Yup.string().required('Campo obrigatório.'),
    birthday: Yup.string().required('Campo obrigatório.'),
    rg: Yup.string().required('Campo obrigatório.'),
    emissorRG: Yup.string().required('Campo obrigatório.')
  })
}
