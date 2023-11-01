import { Card } from '../../components/Card/Card'
import { useStyles } from './style'
import { useChildReadings } from './service/useChildReadings'
import { CircularProgress, Typography } from '@mui/material'

export const ChildrensArea = () => {
  const classes = useStyles()
  const { data: postsFromApi, isFetching } = useChildReadings()

  if (isFetching) return <CircularProgress />
  if (postsFromApi && postsFromApi?.length <= 0)
    return <Typography>Nenhum post por enquanto.</Typography>
  return (
    <div className={classes.container}>
      {postsFromApi?.map(({ author, content, description, title }, index) => (
        <Card key={index} post={{ author, content, description, title }} />
      ))}
    </div>
  )
}
