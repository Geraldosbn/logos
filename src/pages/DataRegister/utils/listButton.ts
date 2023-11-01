import { TypePost } from './../dialogForms/FormPost/FormPost'
export interface ListButton {
  label: string
  value: string
  typePost: TypePost['typePost']
}

export const listButtonRegister: ListButton[] = [
  { label: 'Publicar estudo', value: 'article', typePost: 'article' },
  {
    label: 'Publicar leitura infantil',
    value: 'childrensReading',
    typePost: 'childReading'
  }
]
