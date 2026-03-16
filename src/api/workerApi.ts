import axios from 'axios'
import type { Job } from "../types/jobs.ts"

const API_BASE = 'https://test.swipejobs.com/api/'
const WORKER_ID = '7f90df6e-b832-44e2-b624-3143d428001f'

const api = axios.create({
    baseURL: API_BASE,
})

export async function getJobs(): Promise<Job[]> {
    const response = await api.get(`worker/${WORKER_ID}/matches`)
    return response.data
}

export default api