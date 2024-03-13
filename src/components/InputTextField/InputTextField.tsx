import { StandardTextFieldProps, TextField } from '@mui/material'

interface InputTextField extends StandardTextFieldProps {
  errorMessage?: string
}
export const InputTextField = ({ errorMessage, ...props }: InputTextField) => {
  return (
    <div style={{ width: '100%', paddingBottom: 5, paddingTop: 5 }}>
      <TextField {...props} style={{ width: '100%' }} />
      <div style={{ color: 'red', fontSize: 12, margin: 0 }}>
        {errorMessage}
      </div>
    </div>
  )
}
