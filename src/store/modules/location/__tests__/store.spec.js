import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { locationStore } from '../index';

describe('Location store', () => {
  let store;
  const localVue = createLocalVue();
  localVue.use(Vuex);

  function createStore() {
    const locationCopy = Object.assign({}, locationStore);
    return {};
  }

  beforeEach(() => {
    store = new Vuex.Store(createStore());
  });
});
