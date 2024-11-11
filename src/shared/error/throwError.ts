import axios, { AxiosError } from 'axios'
import { notify } from '../../helpers/notificationHelper'

export const throwError = (e: unknown) => {
  if (axios.isAxiosError(e)) {
    const err = e as AxiosError
    return notify('error', `Erro na requisição: ${err.message}`)
  }
  if (e instanceof Error) {
    return notify('error', `Erro inesperado: ${e.message}`)
  }

  return notify('error', `Erro inesperado: ${String(e)}`)
}
