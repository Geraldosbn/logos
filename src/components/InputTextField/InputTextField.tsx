import { StandardTextFieldProps, TextField } from '@mui/material'

interface InputTextField extends StandardTextFieldProps {
  errorMessage?: string
}
export const InputTextField = ({ errorMessage, ...props }: InputTextField) => {
  return (
    <div>
      <TextField {...props} />
      <p style={{ color: 'red', fontSize: 12, margin: 0 }}>{errorMessage}</p>
    </div>
  )
}
