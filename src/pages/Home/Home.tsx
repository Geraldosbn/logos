import {Card} from '../../components/Card/Card'
//import { useHome } from './service/useHome';
import {Container} from '../../containers/Container/Container'
import {posts} from '../../mocks/mock'

export const Home = () => {
  //const { data: postsFromApi, isLoading } = useHome();

  return (
    <Container
      isFetching={false}
      isEmpty={!posts || (posts && posts?.length <= 0)}>
      {posts?.map(({author, content, description, title}, index) => (
        <Card
          key={index}
          post={{author, content, description, title}}
        />
      ))}
    </Container>
  )
}
