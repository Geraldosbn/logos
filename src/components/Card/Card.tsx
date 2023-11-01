import CardMui from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import FullScreenDialog from '../../containers/Dialog/Dialog'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { useStyles } from './style'
import { Post } from '../../shared/interfaces/interfaces'

interface CardProps {
  post: Post
}
export const Card = ({ post }: CardProps) => {
  const { author, title, description, content } = post
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <CardMui className={classes.container}>
      <CardContent className={classes.content}>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {`Autor: ${author}`}
        </Typography>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2'>{description}</Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <Button onClick={() => setOpen(true)}>Ver mais</Button>
      </CardActions>
      <FullScreenDialog
        isOpen={open}
        label={title}
        content={content}
        onClose={() => setOpen(false)}
      />
    </CardMui>
  )
}
