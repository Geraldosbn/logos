import { Paper } from '@mui/material'
import { useStyles } from './style'
import { PropsWithChildren } from 'react'

interface PaperFormProps extends PropsWithChildren {
  small?: boolean
  onSubmit: () => void
}

export const PaperForm = ({ onSubmit, children, small }: PaperFormProps) => {
  const classes = useStyles()

  const form = (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}
    </form>
  )

  if (small) {
    return (
      <Paper className={`${classes.paper} ${classes.paperSmall}`} elevation={3}>
        {form}
      </Paper>
    )
  }
  return (
    <Paper className={`${classes.paper} ${classes.paperLarge}`} elevation={3}>
      {form}
    </Paper>
  )
}
