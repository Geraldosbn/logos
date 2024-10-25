import {} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3'
import {ptBR} from 'date-fns/locale'
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers'
import {InputTextFieldProps} from '../InputTextField/InputTextField'
import {FormControl} from '@mui/material'
import {useEffect, useState} from 'react'
import {format, isValid} from 'date-fns'

interface InputDateProps extends Omit<InputTextFieldProps, 'onChange'> {
	clearError?: () => void
	onChange?: (value: string) => void
}
export const InputDate = ({label, onChange, clearError, ...props}: InputDateProps) => {
	const [value, setValue] = useState<Date | null>(null)

	useEffect(() => {
		if (value && isValid(value) && onChange) {
			clearError && clearError()
			onChange(format(value, 'yyyy-MM-dd'))
		} else if (onChange) {
			onChange('')
		}
	}, [value])

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
			<FormControl fullWidth style={{paddingBottom: 5, marginTop: 10}}>
				<DatePicker
					label={label}
					value={value}
					format="dd/MM/yyyy"
					onChange={(value) => setValue(value)}
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
