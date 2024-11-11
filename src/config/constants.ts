interface BaseUrl {
  DEV: string
  PROD: string
}

const API_BASE_URL: BaseUrl = {
  DEV: 'http://localhost:8081',
  PROD: 'https://node-api-xaci.onrender.com'
}

export const BASE_URL = API_BASE_URL.DEV

export const AUTH_PREFIX = '/auth'

export const AUTH_ENDPOINT = BASE_URL + AUTH_PREFIX + '/login'

export const CREATE_USER_ENDPOINT = BASE_URL + AUTH_PREFIX + '/create-user'

export const MEMBER_PREFIX = '/members'

export const CREATE_MEMBER_ENDPOINT = BASE_URL + MEMBER_PREFIX + '/create-member'
