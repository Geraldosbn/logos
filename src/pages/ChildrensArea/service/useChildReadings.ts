import {useQuery} from 'react-query'
import {Post} from '../../../shared/interfaces/interfaces'
import {BASE_URL} from '../../../config/connectionAPI'

export const useChildReadings = () => {
	return useQuery('ChildReadings', async () => {
		const data: Post[] = await getChildReadings()
		if (data) {
			return data
		}
	})
}

const getChildReadings = async () => {
	const data = await fetch(`${BASE_URL}/childReadings`)
	const response = await data.json()

	return response
}
