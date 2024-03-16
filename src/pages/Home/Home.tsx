import { CircularProgress, Typography } from '@mui/material'
import { Card } from '../../components/Card/Card'
import { useHome } from './service/useHome'
import { useStyles } from './style'

export const Home = () => {
  const classes = useStyles()
  const { data: postsFromApi, isFetching } = useHome()

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
