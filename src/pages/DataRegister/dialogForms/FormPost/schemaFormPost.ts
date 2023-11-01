import * as Yup from 'yup'

export const schemaFormPost = Yup.object().shape({
  author: Yup.string().required('Campo obrigatório.'),
  title: Yup.string().required('Campo obrigatório.'),
  description: Yup.string()
    .required('Campo obrigatório.')
    .max(100, 'A descrição deve ter no máximo 100 caracteres.'),
  content: Yup.string().required('Campo obrigatório.')
})
