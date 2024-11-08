import axios from 'axios'
import {Login, Token} from '../../shared/interfaces/interfaces'
import {BASE_URL} from '../../config/connectionAPI'

export const loginRequest = async (data: Login): Promise<string> => {
  const response = await axios.post<Token>(`${BASE_URL}/auth/login`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.data.token
}
