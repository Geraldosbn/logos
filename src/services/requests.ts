import { PostVariables } from '../pages/DataRegister/dialogForms/FormPost/service/useFormPost'

export const getArticles = async () => {
  const data = await fetch('http://localhost:3000/articles')
  const response = await data.json()

  return response
}

export const getChildReadings = async () => {
  const data = await fetch('https://node-api-xaci.onrender.com/childReadings')
  const response = await data.json()

  return response
}

export const createPost = async ({ data, typePost }: PostVariables) => {
  const response = await fetch(
    `https://node-api-xaci.onrender.com/${typePost}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )

  return response.status
}
