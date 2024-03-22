import { Card } from '../../components/Card/Card'
import { useHome } from './service/useHome'
import { Container } from '../../containers/Container/Container'

export const Home = () => {
  const { data: postsFromApi, isFetching } = useHome()

  return (
    <Container
      isFetching={isFetching}
      isEmpty={!postsFromApi || (postsFromApi && postsFromApi?.length <= 0)}
    >
      {postsFromApi?.map(({ author, content, description, title }, index) => (
        <Card key={index} post={{ author, content, description, title }} />
      ))}
    </Container>
  )
}
