import axios from 'axios'

const BASE_API = import.meta.env.VITE_BASE_API_SERVER

export default axios.create({
  baseURL: BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [
    (data: object): String => {
      return JSON.stringify(data)
    },
  ],
})
