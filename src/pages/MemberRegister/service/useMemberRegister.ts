import { useMutation } from 'react-query'
import { MemberData } from '../../../shared/interfaces/interfaces'
import { createMember } from '../../../services/members/requests'

export const useMemberRegister = () => {
  return useMutation(async (data: MemberData) => {
    const response = await createMember({ data, endPoint: 'createMember' })

    return response
  })
}
