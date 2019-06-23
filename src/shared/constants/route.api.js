import { globalConstants } from '@/shared/constants/index.js'

const apiRoot = '/api'
const character = '/character'

class RouteAPI {
  get hostRoot() {
    return `${globalConstants.API_URL}${apiRoot}`
  }

  getAllCharacters() {
    return `${character}`
  }

  getCharacter(id) {
    return `${character}/${id}`
  }
}

export const routesApiConstants = new RouteAPI()
