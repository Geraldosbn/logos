import { useMutation } from 'react-query'
import { MemberData } from '../../../shared/interfaces/interfaces'
import { createMember } from '../../../services/members/requests'
import { AxiosError } from 'axios'

export const useMemberRegister = () => {
  return useMutation(
    async (data: MemberData) => {
      await createMember({ data, endPoint: 'createMember' })
    },
    {
      onSuccess: () => {
        alert('Membro cadastrado com sucesso!')
      },
      onError: err => {
        const error = err as AxiosError
        alert(`Erro na requisição: ${error.message}`)
      }
    }
  )
}
