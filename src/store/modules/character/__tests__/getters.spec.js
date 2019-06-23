import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import { characterStore } from '../index'

describe('Character store getters', () => {
  let store
  const localVue = createLocalVue()
  localVue.use(Vuex)

  function createStore() {
    const characterCopy = Object.assign({}, characterStore)
    return { modules: { character: characterCopy } }
  }

  beforeEach(() => {
    store = new Vuex.Store(createStore())
  })
})
