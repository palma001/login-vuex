import { MUTATIONS } from './name'
export const mutations = {

  [MUTATIONS.CLEAR_ACCOUNT_STATE]: (state, payload) => {
    state.email = null
    state.roles = null
    state.TOKEN = null
    state.REFRESH_TOKEN = null
    state.expires_in = null
    state.token_type = null
    localStorage.setItem('roles', null)
    localStorage.setItem('TOKEN', null)
    localStorage.setItem('REFRESH_TOKEN', null)
    localStorage.setItem('expires_in', null)
    localStorage.setItem('email', null)
  },

  [MUTATIONS.SET_TOKEN]: (state, token) => {
    state.TOKEN = token
    localStorage.setItem('TOKEN', token)
  },

  [MUTATIONS.SET_REFRESH_TOKEN]: (state, refreshToken) => {
    state.TOKEN = refreshToken
    localStorage.setItem('REFRESH_TOKEN', refreshToken)
  },

  [MUTATIONS.SET_EMAIL]: (state, email) => {
    state.email = email
    localStorage.setItem('email', email)
  },

  [MUTATIONS.SET_ROLES]: (state, roles) => {
    state.roles = roles
    localStorage.setItem('roles', roles)
  },

  [MUTATIONS.SET_EXPIRE_IN]: (state, expiresIn) => {
    switch (typeof expiresIn) {
      case 'number':
        state.expires_in = new Date(
          new Date().getTime() + expiresIn
        )
        break
      default:
        state.expires_in = expiresIn
    }
    localStorage.setItem('expires_in', state.expires_in)
  }
}
