import axios from 'axios'
import { routesApiConstants } from '@/shared/constants'

const instance = axios.create({
  baseURL: routesApiConstants.hostRoot
})

export const http = instance
