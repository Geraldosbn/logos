import { useQuery } from 'react-query'
import { Post } from '../../../shared/interfaces/interfaces'

export const useChildReadings = () => {
  return useQuery('postChildReadings', async () => {
    const response = await fetch(
      'https://node-api-xaci.onrender.com/childReadings/posts'
    )
    const data: Post[] = await response.json()
    if (data) {
      return data
    }
  })
}
