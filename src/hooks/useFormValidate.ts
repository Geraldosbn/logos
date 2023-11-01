/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ObjectSchema } from 'yup'

export const useFormValidate = (schema: ObjectSchema<any>) => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: 'all',
    resolver: yupResolver(schema)
  })

  const { errors, isSubmitting } = formState

  return {
    register,
    handleSubmit,
    reset,
    errors,
    isSubmitting
  }
}
