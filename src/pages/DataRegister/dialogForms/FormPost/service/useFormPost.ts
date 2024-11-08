import {useMutation} from 'react-query'
import {Post, PostData} from '../../../../../shared/interfaces/interfaces'
import {BASE_URL} from '../../../../../config/connectionAPI'

export const useFormPost = () => {
  return useMutation(async ({data, endPoint}: PostData<Post>) => {
    const response = await createPost({data, endPoint})

    return response
  })
}

const createPost = async ({data, endPoint}: PostData<Post>) => {
  const response = await fetch(`${BASE_URL}/${endPoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response.status
}
