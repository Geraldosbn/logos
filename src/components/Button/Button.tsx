import ButtonMui from '@mui/material/Button'
import { ButtonProps } from '@mui/material/Button'

export const Button = (props: ButtonProps) => {
  return <ButtonMui size='small' variant='contained' {...props} />
}
