interface BaseUrl {
  DEV: string
  PROD: string
}

const API_BASE_URL: BaseUrl = {
  DEV: 'http://localhost:3000',
  PROD: 'https://node-api-xaci.onrender.com'
}

export const BASE_URL = API_BASE_URL.DEV
