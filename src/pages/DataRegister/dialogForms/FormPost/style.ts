import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 400
  },
  input: {
    width: '100%'
  }
}))
