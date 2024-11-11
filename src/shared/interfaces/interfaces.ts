export interface PostData<T> {
  data: T
  endPoint: EndPoints['endPoint']
}

export interface EndPoints {
  endPoint: 'articles' | 'childReadings' | 'createMember' | 'login'
}

export interface Login {
  login: string
  password: string
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}
export interface UserAdmin extends Login {
  role: Role
}

export interface Token {
  token: string
}

export interface Post {
  id?: string
  author: string
  title: string
  description: string
  content: string
}

export interface MemberDataInput {
  name: string
  birthday: string
  phone: string
  cpf: string
  rg: string
  emissorRG: string
}

export interface MemberData {
  person: Person
}

export interface MemberData {
  person: Person
}

export interface Person {
  name: string
  birthday: string
  personData: PersonData
}
export interface PersonData {
  phone: string
  personDocuments: PersonDocs
}

export interface PersonDocs {
  cpf: string
  rg: string
  emissorRG: string
}
