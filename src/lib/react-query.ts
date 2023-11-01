import { MutationCache, QueryCache, QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3 * (60 * 1000),
      cacheTime: 5 * (60 * 1000)
    }
  },
  queryCache: new QueryCache(),
  mutationCache: new MutationCache()
})
