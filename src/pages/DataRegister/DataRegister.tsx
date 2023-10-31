import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'
import { listButtonRegister } from './utils/listButton'
import { Button } from '../../components/Button/Button'
import { DialogForms } from './dialogForms/DialogForms'

export interface StateSelected {
  label?: string
  open?: boolean
}

export const DataRegister = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()
  const [valueOfButton, setValueOfButton] = useState<StateSelected>()
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/', { replace: true })
    }
  }, [])

  return (
    <div>
      {listButtonRegister.map(({ label, value }) => (
        <Button
          key={value}
          onClick={() => setValueOfButton({ label: value, open: true })}
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
