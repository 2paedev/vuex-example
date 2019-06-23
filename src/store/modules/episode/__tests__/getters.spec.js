import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import { episodeStore } from '../index'

describe('Episode store getters', () => {
  let store
  const localVue = createLocalVue()
  localVue.use(Vuex)

  function createStore() {
    const episodeCopy = Object.assign({}, episodeStore)
    return { modules: { episode: episodeCopy } }
  }

  beforeEach(() => {
    store = new Vuex.Store(createStore())
  })
})
