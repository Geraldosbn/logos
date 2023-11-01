import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schemaLogin = Yup.object().shape({
  username: Yup.string().required('Campo obrigatório.'),
  password: Yup.string().required('Campo obrigatório.')
})

export const useFormLogin = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: 'all',
    resolver: yupResolver(schemaLogin)
  })

  const { errors, isSubmitting } = formState

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting
  }
}
