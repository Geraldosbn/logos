import { Card } from '../../components/Card/Card'
import { useHome } from './service/useHome'
import { useStyles } from './style'

function Home() {
  const classes = useStyles()
  const { data: postsFromApi } = useHome()

  return (
    <div className={classes.container}>
      {postsFromApi?.map(({ author, content, description, title }, index) => (
        <Card key={index} post={{ author, content, description, title }} />
      ))}
    </div>
  )
}

export default Home
