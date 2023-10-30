import { Card } from '../../components/Card/Card'
import bibleStudyCards from './mockStudies'
import { useStyles } from './style'

function Home() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {bibleStudyCards.map(({ author, content, description, title }) => (
        <Card
          key={title}
          title={title}
          author={author}
          content={content}
          description={description}
        />
      ))}
    </div>
  )
}

export default Home
