import { useMutation } from 'react-query'
import { Post, PostData } from '../../../../../shared/interfaces/interfaces'
import { createPost } from '../../../../../services/requests'

export const useFormPost = () => {
  return useMutation(async ({ data, endPoint }: PostData<Post>) => {
    const response = await createPost({ data, endPoint })

    return response
  })
}
