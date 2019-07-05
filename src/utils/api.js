import { usernameDefault, passwordDefault, authCodeDefault } from './constants'

const api = {
  login: async (user, pass) => {
    try {
      const response = (user === usernameDefault && pass === passwordDefault) ? await fetch('logged.json') : await fetch('denied.json')
      const request = await response.json()
      return request
    } catch (error) {
      console.error(error)
    }
  },
  authCode: async (authCode) => {
    try {
      const response = (authCode === authCodeDefault) ? await fetch('authorized.json') : await fetch('no-authorized.json')
      const request = await response.json()
      return request
    } catch (error) {
      console.error(error)
    }
  }
}

export default api
