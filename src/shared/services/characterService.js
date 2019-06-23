import { routesApiConstants } from '@/shared/constants'
import { http } from '@/shared/http'

export async function getAllCharacters() {
  return await http.get(routesApiConstants.getAllCharacters())
}

export async function getCharacter(id) {
  const config = {
    params: {
      //employeeToRequest: employeeToRequest
    }
  }
  return await http.get(routesApiConstants.getCharacter(id), config)
}