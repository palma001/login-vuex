export default function () {
  return {
    /**
     * First name users in session
     * @type {String}
     */
    first_name: null,
    /**
     * Last name users in session
     * @type {String}
     */
    last_name: null,
    /**
     * Username in session
     * @type {String}
     */
    username: null,
    /**
     * Roles users in session
     * @type {Array}
     */
    roles: [],
    /**
     * token session
     * @type{String}
     */
    TOKEN: null,
    /**
     * Refresh token session
     * @type{String}
     */
    REFRESH_TOKEN: null,
    /**
     * expire date token session
     * @type{String}
     */
    expires_in: null,
    /**
     * token type session
     * @type{String}
     */
    token_type: null
  }
}
