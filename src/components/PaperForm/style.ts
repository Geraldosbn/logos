import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
  },
  paperLarge: {
    width: '100%',
    '@media (min-width: 1024px)': {
      width: 800
    }
  },
  paperSmall: {
    width: '300px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  }
}))
