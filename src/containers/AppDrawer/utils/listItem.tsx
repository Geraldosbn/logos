import { Description, Gavel, Home, People, Toys } from '@mui/icons-material'
import {
  CHILDRENS_AREA_PATH,
  CHURCH_HISTORY_PATH,
  MAIN_PATH,
  MEMBER_REGISTER_PATH,
  RULE_OF_FAITH_PATH,
  USER_REGISTER_PATH
} from '../../../shared/constants/path'

export interface ListItems {
  label: string
  to: string
  icon: React.ReactNode
  enable: boolean
}

export const listItems: ListItems[] = [
  { label: 'Inicio', to: MAIN_PATH, icon: <Home />, enable: true },
  {
    label: 'Cadastrar de membro',
    to: MEMBER_REGISTER_PATH,
    icon: <People />,
    enable: true
  },
  {
    label: 'Cadastrar de usuário',
    to: USER_REGISTER_PATH,
    icon: <People />,
    enable: true
  },
  {
    label: 'História da igreja',
    to: CHURCH_HISTORY_PATH,
    icon: <Description />,

    enable: false
  },
  { label: 'Regra de fé', to: RULE_OF_FAITH_PATH, icon: <Gavel />, enable: false },
  { label: 'Área infantil', to: CHILDRENS_AREA_PATH, icon: <Toys />, enable: false }
].filter((item) => item.enable)
