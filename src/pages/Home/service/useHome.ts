import {useQuery} from 'react-query'
import {Post} from '../../../shared/interfaces/interfaces'
import {BASE_URL} from '../../../config/connectionAPI'

export const useHome = () => {
	return useQuery('postsHome', async () => {
		const data: Post[] = await getArticles()

		if (data) {
			return data
		}
	})
}

const getArticles = async () => {
	const data = await fetch(`${BASE_URL}/articles`)
	const response = await data.json()

	return response
}
