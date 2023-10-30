import { Typography, Paper } from '@mui/material'
import { useStyles } from './style'

export const ChurchHistory = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant='h5' gutterBottom>
          História da Nossa Igreja
        </Typography>
        <Typography variant='body1' paragraph>
          Aqui você pode apresentar a história da sua igreja de forma detalhada
          e cativante. Descreva o início da igreja, os eventos marcantes, as
          pessoas envolvidas e os valores fundamentais que a igreja representa.
        </Typography>
        <Typography variant='body1' paragraph>
          Conte as histórias significativas, as mudanças ao longo dos anos e
          como a igreja impactou a comunidade e as vidas das pessoas. Este é o
          lugar para compartilhar a jornada espiritual e o legado da sua igreja.
        </Typography>
        <Typography variant='body1'>
          Sinta-se à vontade para adicionar imagens, vídeos e outros elementos
          visuais para enriquecer a narrativa.
        </Typography>
      </Paper>
    </div>
  )
}
