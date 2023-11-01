import { Card } from '../../components/Card/Card'
import { useStyles } from './style'
import { useChildReadings } from './service/useChildReadings'

export const ChildrensArea = () => {
  const classes = useStyles()
  const { data: postsFromApi } = useChildReadings()
  return (
    <div className={classes.container}>
      {postsFromApi?.map(({ author, content, description, title }, index) => (
        <Card key={index} post={{ author, content, description, title }} />
      ))}
    </div>
  )
}
