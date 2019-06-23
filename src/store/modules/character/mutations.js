import { assembleAllCharactersModel, assembleCharacterModel } from '@/shared/assemblers/characterAssembler'

export const mutations = {
  setAllCharacters(state, payload) {
    state.allCharacters = assembleAllCharactersModel(payload.results)
  },

  setCharacterInfo(state, payload) {
    state.characterInfo = assembleCharacterModel(payload)
  }
}
