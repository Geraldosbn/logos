import { StandardTextFieldProps, TextField } from '@mui/material'

export interface InputTextFieldProps extends StandardTextFieldProps {}
export const InputTextField = ({ ...props }: InputTextFieldProps) => {
  return (
    <TextField
      style={{ width: '100%', paddingBottom: 5, marginTop: 10 }}
      {...props}
    />
  )
}
