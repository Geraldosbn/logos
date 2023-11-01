import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'
import { listButtonRegister } from './utils/listButton'
import { Button } from '../../components/Button/Button'
import { DialogForms } from './dialogForms/DialogForms'
import { CircularProgress } from '@mui/material'
import { TypePost } from './dialogForms/FormPost/FormPost'

export interface StateSelected {
  label?: string
  typePost?: TypePost['typePost']
  open?: boolean
}

export const DataRegister = () => {
  const navigate = useNavigate()
  const { isLoggedIn, idle } = useAuth()
  const [valueOfButton, setValueOfButton] = useState<StateSelected>()

  if (idle) return <CircularProgress />
  if (!isLoggedIn) {
    navigate('/', { replace: true })
  }

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
