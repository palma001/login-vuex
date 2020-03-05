import { Store } from '../store/'
import { ACTIONS } from '../store/module-login/name'

export const validationSession = async (to, from, next) => {
  let validation = await Store.dispatch(ACTIONS.VALID_SESSION)
  if (!validation) {
    next('/login')
  }
  next()
}
