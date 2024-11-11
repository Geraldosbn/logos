import { CircularProgress } from '@mui/material'
import ButtonMui from '@mui/material/Button'
import { ButtonProps } from '@mui/material/Button'

interface Props extends ButtonProps {
  isLoading?: boolean
}

export const Button = (props: Props) => {
  if (props.isLoading) return <CircularProgress size={30} />
  return (
    <ButtonMui
      size="small"
      variant="contained"
      color="secondary"
      {...props}
    />
  )
}
