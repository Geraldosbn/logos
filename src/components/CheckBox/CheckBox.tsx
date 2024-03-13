import { Checkbox, CheckboxProps, Typography } from '@mui/material'
import { useState } from 'react'
import { useStyles } from './style'

interface BaseCheckBoxProps extends Omit<CheckboxProps, 'label'> {
  label: string
  onclick: (value: boolean) => void
}

export const CheckBox = ({ label, onclick, ...props }: BaseCheckBoxProps) => {
  const classes = useStyles()
  const [checked, setChecked] = useState(false)

  const handleCheck = (checked: boolean) => {
    onclick(checked)
    setChecked(checked)
  }

  return (
    <div className={classes.container}>
      <Checkbox
        checked={checked}
        onChange={(_, checked) => handleCheck(checked)}
        {...props}
      />
      <Typography>{label}</Typography>
    </div>
  )
}
