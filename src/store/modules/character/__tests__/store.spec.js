import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import { characterStore } from '../index'

describe('Character store', () => {
  let store
  const localVue = createLocalVue()
  localVue.use(Vuex)

  function createStore() {
    const characterCopy = Object.assign({}, characterStore)
    return {}
  }

  beforeEach(() => {
    store = new Vuex.Store(createStore())
  })
})