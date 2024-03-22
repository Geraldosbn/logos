import { Card } from '../../components/Card/Card'
import { useChildReadings } from './service/useChildReadings'
import { Container } from '../../containers/Container/Container'

export const ChildrensArea = () => {
  const { data: postsFromApi, isFetching } = useChildReadings()

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
