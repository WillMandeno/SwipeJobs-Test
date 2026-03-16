import { useEffect, useState } from "react"
import "./App.css"

import { getJobs, getWorker } from "./api/workerApi"
import type { Job } from "./types/jobs"
import type { Worker } from "./types/workers"
import JobCard from "./components/JobCard"

function App() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [worker, setWorker] = useState<Worker | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [jobsData, workerData] = await Promise.all([getJobs(), getWorker()])
        setJobs(jobsData)
        setWorker(workerData)
      } catch (error) {
        console.error("Failed to load data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return <div className="loading">Loading jobs...</div>
  }

  return (
    <div className="app">
      <header className="header">
        <h2>swipejobs</h2>
        <span>{worker ? `${worker.firstName} ${worker.lastName}` : ""}</span>
      </header>

      {jobs.map((job) => (
        <JobCard key={job.jobId} job={job} />
      ))}
    </div>
  )
}

export default App