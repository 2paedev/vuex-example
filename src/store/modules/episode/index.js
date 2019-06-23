import { EpisodeState } from './state'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export const episodeStore = {
  namespaced: true,
  state: new EpisodeState(),
  mutations,
  getters,
  actions
}
