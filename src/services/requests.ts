import { BASE_URL } from '../config/connectionAPI'
import { Post, PostData } from '../shared/interfaces/interfaces'

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

export const createPost = async ({ data, endPoint }: PostData<Post>) => {
  const response = await fetch(`${BASE_URL}/${endPoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response.status
}
