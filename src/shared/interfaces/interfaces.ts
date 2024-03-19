export interface PostData<T> {
  data: T
  endPoint: EndPoints['endPoint']
}

export interface EndPoints {
  endPoint: 'articles' | 'childReadings' | 'createMember'
}

export interface Post {
  id?: string
  author: string
  title: string
  description: string
  content: string
}

export interface MemberData {
  name: string
  phone: string
  cpf: string
  birthday: string
  login?: string
  password?: string
}
