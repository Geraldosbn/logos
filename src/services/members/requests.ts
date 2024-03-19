import { BASE_URL } from '../../config/connectionAPI'
import { MemberData, PostData } from '../../shared/interfaces/interfaces'

export const createMember = async ({
  data,
  endPoint
}: PostData<MemberData>) => {
  const response = await fetch(`${BASE_URL}/${endPoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return response.status
}
