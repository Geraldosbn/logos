export const getHeaderWithTokenStorage = () => {
  const token = localStorage.getItem('token')

  if (token !== null) {
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }
  return {
    'Content-Type': 'application/json'
  }
}

export const headers = getHeaderWithTokenStorage()
