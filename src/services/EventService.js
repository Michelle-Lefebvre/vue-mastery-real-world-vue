import axios from 'axios'
// .create is A single Axios instance for our entire app
const apiClient = axios.create({
  // base URL for all calls to use
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    // for authentication & configuration
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}