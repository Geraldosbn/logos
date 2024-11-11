import { useMutation } from 'react-query'
import { MemberData } from '../../../shared/interfaces/interfaces'
import { requestPost } from '../../../shared/api/requestPost'
import { throwError } from '../../../shared/error/throwError'
import { CREATE_MEMBER_ENDPOINT } from '../../../config/constants'

export const useMemberRegister = () => {
  return useMutation(async (data: MemberData) => {
    await createMember(data)
  })
}

const createMember = async (data: MemberData) => {
  try {
    await requestPost(CREATE_MEMBER_ENDPOINT, data)
  } catch (e) {
    throwError(e)
  }
}
