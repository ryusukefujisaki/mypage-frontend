import baseAxios from 'axios'

const env = import.meta.env
const axios = baseAxios.create({
  baseURL: env.VITE_BACKEND_SCHEME + env.VITE_BACKEND_HOST + ':' + env.VITE_BACKEND_PORT
})

export default axios
