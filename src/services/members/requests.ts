import axios from 'axios'
import { BASE_URL } from '../../config/connectionAPI'
import { MemberData, PostData } from '../../shared/interfaces/interfaces'

export const createMember = async ({
  data,
  endPoint
}: PostData<MemberData>) => {
  await axios.post(`${BASE_URL}/${endPoint}`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
