import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateField, DateFieldProps } from '@mui/x-date-pickers/DateField'
import { StandardTextFieldProps } from '@mui/material'

interface InputDateProps
  extends DateFieldProps<never>,
    Pick<
      StandardTextFieldProps,
      'error' | 'label' | 'helperText' | 'placeholder'
    > {}

export const InputDate = ({ ...props }: InputDateProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField
        format='DD-MM-YYYY'
        style={{ width: '100%', paddingBottom: 10, paddingTop: 10 }}
        {...props}
      />
    </LocalizationProvider>
  )
}
