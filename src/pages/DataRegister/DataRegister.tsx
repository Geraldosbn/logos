import {useState} from 'react'
import {listButtonRegister} from './utils/listButton'
import {Button} from '../../components/Button/Button'
import {DialogForms} from './dialogForms/DialogForms'
import {EndPoints} from '../../shared/interfaces/interfaces'

export interface StateSelected {
  label?: string
  endPoint?: EndPoints['endPoint']
  open?: boolean
}

export const DataRegister = () => {
  const [valueOfButton, setValueOfButton] = useState<StateSelected>()

  return (
    <div>
      {listButtonRegister.map(({label, endPoint}, index) => (
        <Button
          key={index}
          onClick={() => setValueOfButton({label, open: true, endPoint})}
          style={{margin: 5}}>
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
