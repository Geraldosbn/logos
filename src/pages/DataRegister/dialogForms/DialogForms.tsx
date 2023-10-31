import FullScreenDialog from '../../../containers/Dialog/Dialog'
import { useState, useEffect } from 'react'
import { StateSelected } from '../DataRegister'

export interface DialogFormsProps {
  state?: StateSelected
  onClose?: () => void
}

export const DialogForms = ({ state, onClose }: DialogFormsProps) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    state?.open ? setOpen(true) : setOpen(false)
  }, [state])

  const handleClose = () => {
    setOpen(false), onClose && onClose()
  }

  return (
    <FullScreenDialog
      isOpen={open}
      label={
        state?.label === 'article'
          ? 'Publicar estudo'
          : 'Publicar leitura infantil'
      }
      onClose={handleClose}
      content={<div></div>}
    />
  )
}
