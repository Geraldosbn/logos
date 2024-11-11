import { useMutation } from 'react-query'
import { UserAdmin } from '../../../shared/interfaces/interfaces'
import { requestPost } from '../../../shared/api/requestPost'
import { throwError } from '../../../shared/error/throwError'
import { CREATE_USER_ENDPOINT } from '../../../config/constants'
import { HttpStatusCode } from 'axios'
import { notify } from '../../../helpers/notificationHelper'

export const useUserRegister = () => {
  return useMutation(async (data: UserAdmin) => {
    await createUser(data)
  })
}

const createUser = async (data: UserAdmin) => {
  try {
    const response = await requestPost(CREATE_USER_ENDPOINT, data)
    if (response.status === HttpStatusCode.Ok) {
      notify('success', 'Usuário cadastrado com sucesso.')
    }
  } catch (e) {
    throwError(e)
  }
}
