import { EndPoints } from '../../../shared/interfaces/interfaces'

export interface ListButton {
  label: string
  endPoint: EndPoints['endPoint']
}

export const listButtonRegister: ListButton[] = [
  { label: 'Publicar estudo', endPoint: 'articles' },
  {
    label: 'Publicar leitura infantil',
    endPoint: 'childReadings'
  }
]
