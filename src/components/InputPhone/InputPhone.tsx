import { PatternFormat } from 'react-number-format'
import {
  InputTextField,
  InputTextFieldProps
} from '../InputTextField/InputTextField'
import { useState } from 'react'
import { extractNumbers } from '../../shared/utils/extractNumbers'

interface InputPhoneProps
  extends Pick<
    InputTextFieldProps,
    'inputProps' | 'label' | 'onChange' | 'error' | 'helperText'
  > {
  setValueOnBlur?: (value: string) => void
}

export const InputPhone = ({ setValueOnBlur, ...props }: InputPhoneProps) => {
  const [value, setValue] = useState('')

  return (
    <PatternFormat
      format='(##) #####-####'
      onChange={evt => setValue(extractNumbers(evt.target.value))}
      onBlur={() => setValueOnBlur && setValueOnBlur(value)}
      customInput={InputTextField}
      {...props}
    />
  )
}
