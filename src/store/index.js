import Vue from 'vue'
import Vuex from 'vuex'
import { characterStore } from './modules/character'
import { locationStore } from './modules/location'
import { episodeStore } from './modules/episode'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    character: characterStore,
    location: locationStore,
    episode: episodeStore
  }
})
