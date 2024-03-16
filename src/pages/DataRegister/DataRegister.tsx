import { useState } from 'react'
import { listButtonRegister } from './utils/listButton'
import { Button } from '../../components/Button/Button'
import { DialogForms } from './dialogForms/DialogForms'
import { TypePost } from './dialogForms/FormPost/FormPost'

export interface StateSelected {
  label?: string
  typePost?: TypePost['typePost']
  open?: boolean
}

export const DataRegister = () => {
  const [valueOfButton, setValueOfButton] = useState<StateSelected>()

  return (
    <div>
      {listButtonRegister.map(({ label, typePost }, index) => (
        <Button
          key={index}
          onClick={() => setValueOfButton({ label, open: true, typePost })}
          style={{ margin: 5 }}
        >
          {label}
        </Button>
      ))}
      <DialogForms
        state={valueOfButton}
        onClose={() => setValueOfButton(undefined)}
      />
    </div>
  )
}
