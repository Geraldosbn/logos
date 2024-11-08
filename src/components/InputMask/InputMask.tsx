import {PatternFormat} from 'react-number-format'
import {InputTextField, InputTextFieldProps} from '../InputTextField/InputTextField'
import {useState} from 'react'
import {extractNumbers} from '../../shared/utils/extractNumbers'

interface InputMaskProps extends Pick<InputTextFieldProps, 'inputProps' | 'label' | 'onChange' | 'error' | 'helperText'> {
  type: 'cpf' | 'phone'
  setValueOnBlur?: (value: string) => void
}

export const InputMask = ({setValueOnBlur, type, ...props}: InputMaskProps) => {
  const [value, setValue] = useState('')

  return (
    <PatternFormat
      format={type === 'phone' ? '(##) #####-####' : '###.###.###-##'}
      onChange={(evt) => setValue(extractNumbers(evt.target.value))}
      onBlur={() => setValueOnBlur && setValueOnBlur(value)}
      customInput={InputTextField}
      {...props}
    />
  )
}
