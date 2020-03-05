import { GETTERS } from './name'

export const getters = {
  /**
   * Status of de expire date
   * @param  {[type]} state [description]
   * @return {[type]}       [description]
   */
  [GETTERS.GET_TOKEN]: (state) => {
    console.log(state)
    if (!state.TOKEN) {
      return true
    }
    return false
  }
}
