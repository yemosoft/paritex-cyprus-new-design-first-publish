
import axios from 'axios'

//import { useUserSession } from '/@src/stores/userSession'

let api: any;

export function createApi() {
  // Here we set the base URL for all requests made to the api
  api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  })

  // We set an interceptor for each request to
  // include Bearer token to the request if user is logged in
  api.interceptors.request.use((config: any) => {
    // config.headers['Content-Type'] = 'application/json'



    return config


  })

  return api
}

export function useApi() {
  if (!api) {
    createApi()
  }
  return api
}
