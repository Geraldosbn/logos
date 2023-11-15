import { useMutation } from 'react-query'
import { Post } from '../../../../../shared/interfaces/interfaces'
import { TypePost } from '../FormPost'

export interface PostVariables {
  data: Post
  typePost: TypePost['typePost']
}

export const useFormPost = () => {
  return useMutation(async ({ data, typePost }: PostVariables) => {
    const response = await fetch(
      `https://node-api-xaci.onrender.com/${typePost}/posts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    )

    return response.status
  })
}
