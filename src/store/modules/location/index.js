import { LocationState } from './state'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export const locationStore = {
  namespaced: true,
  state: new LocationState(),
  mutations,
  getters,
  actions
}
