import { Description, Gavel, Home, People, Toys } from '@mui/icons-material'
import { mainPath } from '../../../shared/constants/path'

export interface ListItems {
  label: string
  to: string
  icon: React.ReactNode
}

export const listItems: ListItems[] = [
  { label: 'Inicio', to: `${mainPath}`, icon: <Home /> },
  {
    label: 'Cadastrar de membro',
    to: `${mainPath}/memberRegister`,
    icon: <People />
  },
  {
    label: 'História da igreja',
    to: `${mainPath}/churchHistory`,
    icon: <Description />
  },
  { label: 'Regra de fé', to: `${mainPath}/ruleOfFaith`, icon: <Gavel /> },
  { label: 'Área infantil', to: `${mainPath}/childrensArea`, icon: <Toys /> }
]
