import { BASE_URL } from '../config/connectionAPI'
import { PostVariables } from '../pages/DataRegister/dialogForms/FormPost/service/useFormPost'

export const getArticles = async () => {
  const data = await fetch(`${BASE_URL}/articles`)
  const response = await data.json()

  return response
}

export const getChildReadings = async () => {
  const data = await fetch(`${BASE_URL}/childReadings`)
  const response = await data.json()

  return response
}

export const createPost = async ({ data, typePost }: PostVariables) => {
  const response = await fetch(`${BASE_URL}/${typePost}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response.status
}
