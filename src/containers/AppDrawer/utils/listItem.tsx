import { Description, Gavel, Home, Login, Toys } from '@mui/icons-material'

export interface ListItems {
  label: string
  to: string
  icon: React.ReactNode
}

export const listItems: ListItems[] = [
  { label: 'Inicio', to: '/', icon: <Home /> },
  { label: 'História da igreja', to: '/churchHistory', icon: <Description /> },
  { label: 'Regra de fé', to: '/ruleOfFaith', icon: <Gavel /> },
  { label: 'Área infantil', to: '/childrensArea', icon: <Toys /> },
  { label: 'Login', to: '/loggedArea', icon: <Login /> }
]
