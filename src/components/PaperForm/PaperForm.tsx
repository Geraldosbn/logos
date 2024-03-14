import { Paper } from '@mui/material'
import { useStyles } from './style'
import { PropsWithChildren } from 'react'

interface PaperFormProps extends PropsWithChildren {
  onSubmit: () => void
}

export const PaperForm = ({ onSubmit, children }: PaperFormProps) => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper} elevation={3}>
      <form className={classes.form} onSubmit={onSubmit}>
        {children}
      </form>
    </Paper>
  )
}
