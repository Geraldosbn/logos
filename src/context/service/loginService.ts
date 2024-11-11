import { Login, Token } from '../../shared/interfaces/interfaces'

import { throwError } from '../../shared/error/throwError'
import { AUTH_ENDPOINT } from '../../config/constants'
import axios from 'axios'

export const loginRequest = async (data: Login): Promise<string | void> => {
  try {
    const response = await axios.post<Token>(AUTH_ENDPOINT, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.data.token
  } catch (e) {
    throwError(e)
  }
}
