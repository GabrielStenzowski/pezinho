import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:2425',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
