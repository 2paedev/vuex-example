import { getAllCharacters, getCharacter } from '@/shared/services/characterService'

export const actions = {
  getAllCharacters(context) {
    //context.commit('global/setRequestInProgress', true, { root: true })
    return getAllCharacters().then(response => {
      context.commit('setAllCharacters', response.data)
      //context.commit('global/setRequestInProgress', false, { root: true })
    })
  },

  getCharacterInfo(context, id) {
    //const userId = authenticationProvider.employeeId
    //context.commit('global/setRequestInProgress', true, { root: true })
    return getCharacter(id).then(response => {
      context.commit('setCharacterInfo', response.data)
      //context.commit('global/setRequestInProgress', false, { root: true })
    })
  }
}