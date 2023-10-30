import { useRouteError } from 'react-router-dom'
import { Container, Typography } from '@mui/material'

export default function ErrorPage() {
  const error = useRouteError() as Error

  return (
    <Container>
      <div id='error-page'>
        <Typography variant='h3'>Oops!</Typography>
        <Typography variant='body1'>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography variant='body2'>
          <i>{error.message}</i>
        </Typography>
      </div>
    </Container>
  )
}
