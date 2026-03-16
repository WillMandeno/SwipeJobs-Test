import axios from 'axios'

const API_BASE = 'https://test.swipejobs.com/'

const api = axios.create({
    baseURL: API_BASE,
})

export default api