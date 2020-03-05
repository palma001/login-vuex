/**
 * Actions
 */
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const VALID_SESSION = 'VALID_SESION'
const REFRESH_TOKEN = 'REFRESH_TOKEN'
const AUTO_LOGOUT = 'AUTO_LOGOUT'

/**
 * Mutations
 */
const SET_TOKEN = 'SET_TOKEN'
const SET_REFRESH_TOKEN = 'SET_REFRESH_TOKEN'
const SET_EMAIL = 'SET_EMAIL'
const SET_ROLES = 'SET_ROLES'
const SET_EXPIRE_IN = 'SET_EXPIRE_IN'
const CLEAR_ACCOUNT_STATE = 'CLEAR_ACCOUNT_STORE'

/**
 * Getters
 */

const GET_TOKEN = 'GET_TOKEN'
/**
 * Actions Login
 * @type {Object}
 */
export const ACTIONS = {
  LOGIN,
  LOGOUT,
  VALID_SESSION,
  REFRESH_TOKEN,
  AUTO_LOGOUT
}

/**
 * Muttations Lgin
 * @type {Object}
 */
export const MUTATIONS = {
  CLEAR_ACCOUNT_STATE,
  SET_TOKEN,
  SET_REFRESH_TOKEN,
  SET_EMAIL,
  SET_ROLES,
  SET_EXPIRE_IN
}

export const GETTERS = {
  GET_TOKEN
}
