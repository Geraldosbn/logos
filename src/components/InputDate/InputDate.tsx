import {} from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { ptBR } from 'date-fns/locale'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { InputTextFieldProps } from '../InputTextField/InputTextField'
import { FormControl } from '@mui/material'

interface InputDateProps extends Omit<InputTextFieldProps, 'onChange'> {
  onChange: (value: string) => void
}
export const InputDate = ({ label, onChange, ...props }: InputDateProps) => {
  const handleChange = (value: unknown) => {
    if (value instanceof Date && !isNaN(value.getTime())) {
      const formattedDate = value.toISOString().slice(0, 10)
      onChange(formattedDate)
    } else {
      onChange('')
    }
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <FormControl fullWidth style={{ paddingBottom: 5, marginTop: 10 }}>
        <DatePicker
          label={label}
          format='dd/MM/yyyy'
          onChange={value => handleChange(value)}
          slotProps={{
            textField: {
              ...props
            }
          }}
        />
      </FormControl>
    </LocalizationProvider>
  )
}
