import { useQuery } from 'react-query'
import { Post } from '../../../shared/interfaces/interfaces'
import { getChildReadings } from '../../../services/requests'

export const useChildReadings = () => {
  return useQuery('ChildReadings', async () => {
    const data: Post[] = await getChildReadings()
    if (data) {
      return data
    }
  })
}
