import { createStore, createLogger } from 'vuex'
import state from './state'
import getters from './getter'
import mutations from './mutation'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state,
  getters,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
