import { TypePost } from './../dialogForms/FormPost/FormPost'
export interface ListButton {
  label: string
  typePost: TypePost['typePost']
}

export const listButtonRegister: ListButton[] = [
  { label: 'Publicar estudo', typePost: 'articles' },
  {
    label: 'Publicar leitura infantil',
    typePost: 'childReadings'
  }
]
