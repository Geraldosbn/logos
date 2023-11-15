import { useQuery } from 'react-query'
import { Post } from '../../../shared/interfaces/interfaces'
import { getArticles } from '../../../services/requests'

export const useHome = () => {
  return useQuery('postsHome', async () => {
    const data: Post[] = await getArticles()

    if (data) {
      return data
    }
  })
}
