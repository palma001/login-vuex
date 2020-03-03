import { ACTIONS } from './name'
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
          id
          first_name
          username
        }
      }
    }`,
      variables: {
        username: self.username,
        password: self.password
      },
      update: (store, { data: { login } }) => {
        console.log(login)
      }
    })
  }
}

export default {
  actions
}
