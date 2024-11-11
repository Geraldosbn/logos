import axios from 'axios'
import { headers } from '../../shared/constants/headers'

export const requestPost = <T = any>(endpoint: string, data: any) => {
  return axios.post<T>(`${endpoint}`, data, {
    headers
  })
}
