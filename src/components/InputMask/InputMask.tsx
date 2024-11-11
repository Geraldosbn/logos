import { PatternFormat } from 'react-number-format'
import { InputTextField, InputTextFieldProps } from '../InputTextField/InputTextField'
import { useState } from 'react'
import { extractNumbers } from '../../shared/utils/extractNumbers'

interface InputMaskProps extends Pick<InputTextFieldProps, 'inputProps' | 'label' | 'onChange' | 'error' | 'helperText'> {
  type: 'cpf' | 'phone' | 'rg'
  setValueOnBlur?: (value: string) => void
}

export const InputMask = ({ setValueOnBlur, type, ...props }: InputMaskProps) => {
  const [value, setValue] = useState('')

  const formatType = (type: string) => {
    if (type === 'phone') return '(##) #####-####'
    if (type === 'cpf') return '###.###.###-##'
    if (type === 'rg') return '#.###.###'
    return '###.###.###-##'
  }

  return (
    <PatternFormat
      format={formatType(type)}
      onChange={(evt) => setValue(extractNumbers(evt.target.value))}
      onBlur={() => setValueOnBlur && setValueOnBlur(value)}
      customInput={InputTextField}
      {...props}
    />
  )
}
