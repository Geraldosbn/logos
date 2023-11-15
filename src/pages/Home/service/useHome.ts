import { useQuery } from 'react-query'
import { Post } from '../../../shared/interfaces/interfaces'

export const useHome = () => {
  return useQuery('postsHome', async () => {
    const response = await fetch(
      'https://node-api-xaci.onrender.com/articles/posts'
    )
    const data: Post[] = await response.json()
    if (data) {
      return data
    }
  })
}
