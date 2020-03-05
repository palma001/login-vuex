import { ACTIONS, MUTATIONS } from './name'
import gql from 'graphql-tag'
/**
 * Login
 * @param {Object} context
 * @param {Object} credentials user
 */

const actions = {
  [ACTIONS.LOGIN]: ({ commit, dispatch }, { self }) => {
    self.$apollo.mutate({
      mutation: gql`mutation ($username: String!, $password: String!) {
      login(input: {
        username: $username,
        password: $password
      })
      {
        access_token
        refresh_token
        expires_in
        token_type
        user {
          email
          username
          first_name
          last_name
          roles {
            acronym
            name
          }
        }
      }
    }`,
      variables: {
        username: self.username,
        password: self.password
      },
      update: (store, { data: { login } }) => {
        commit(MUTATIONS.SET_TOKEN, login.access_token)
        commit(MUTATIONS.SET_REFRESH_TOKEN, login.refresh_token)
        commit(MUTATIONS.SET_EMAIL, login.user.email)
        commit(MUTATIONS.SET_ROLES, JSON.stringify(login.user.roles))
        commit(MUTATIONS.SET_EXPIRE_IN, Number(login.expires_in))
        self.$router.push({ path: 'calen' })
      }
    })
  },
  /**
   * Logout of the app
   * @param {Object} context
   */
  [ACTIONS.LOGOUT]: ({ commit }, { self }) => {
    commit(MUTATIONS.CLEAR_ACCOUNT_STATE)
    self.$router.push({ name: 'login' })
  },
  /**
   * Valiad session active
   */
  [ACTIONS.VALID_SESSION]: ({ commit, dispatch }) => {
    let token = localStorage.getItem('TOKEN')
    let expireIn = new Date(localStorage.getItem('expires_in'))
    let now = new Date()
    let email = localStorage.getItem('email')
    let refreshToken = localStorage.getItem('REFRESH_TOKEN')
    let invalidToken = !token || token === 'null'
    let invalidRefreshToken = !refreshToken || refreshToken === 'null'
    let invalidDate = !expireIn || expireIn === 'null' || now.getTime() >= expireIn.getTime()
    let invalidUser = !email || email === 'null'
    if (invalidToken || invalidDate || invalidUser || invalidRefreshToken) {
      commit(MUTATIONS.CLEAR_ACCOUNT_STATE)
      return false
    }
    const roles = localStorage.getItem('roles')
    commit(MUTATIONS.SET_TOKEN, token)
    commit(MUTATIONS.SET_REFRESH_TOKEN, refreshToken)
    commit(MUTATIONS.SET_EMAIL, email)
    commit(MUTATIONS.SET_ROLES, roles)
    commit(MUTATIONS.SET_EXPIRE_IN, expireIn)
    return true
  },
  /**
   * Refresh user token
   * @param {Object} context
   */
  [ACTIONS.REFRESH_TOKEN]: ({ commit, dispatch }, { self }) => {
    self.$apollo.mutate({
      mutation: gql`mutation ($refresh_token: String!) {
      refreshToken(input: {
        refresh_token: $refresh_token
      })
      {
        access_token
        refresh_token
        expires_in
        token_type
      }
    }`,
      variables: {
        refresh_token: localStorage.getItem('REFRESH_TOKEN')
      },
      update: (store, { data: { refreshToken } }) => {
        commit(MUTATIONS.SET_TOKEN, refreshToken.access_token)
        commit(MUTATIONS.SET_REFRESH_TOKEN, refreshToken.refresh_token)
        commit(MUTATIONS.SET_EXPIRE_IN, Number(refreshToken.expires_in))
      }
    })
  }
}

export default {
  actions
}
