import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200,
    height: 300,
    margin: 10
  },
  content: {
    height: '100%'
  },
  action: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10
  }
}))
