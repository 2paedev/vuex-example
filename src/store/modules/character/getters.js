export const getters = {
  getAllCharacterData(state, getters) {
    return state.allCharacters
  },

  getCharacterData(state, getters) {
    return state.characterInfo
  }
}