import { CharacterState } from './state'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export const characterStore = {
  namespaced: true,
  state: new CharacterState(),
  mutations,
  getters,
  actions
}
