import { useEffect, useState } from "react"
import "./App.css"

import { getJobs } from "./api/workerApi"
import type { Job } from "./types/jobs"
import JobCard from "./components/JobCard"

function App() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await getJobs()
        setJobs(data)
      } finally {
        setLoading(false)
      }
    }

    loadJobs()
  }, [])

  if (loading) {
    return <div className="loading">Loading jobs...</div>
  }

  return (
    <div className="app">
      <header className="header">
        <h2>swipejobs</h2>
        <span>Jim Rose</span>
      </header>

      {jobs.map((job) => (
        <JobCard key={job.jobId} job={job} />
      ))}
    </div>
  )
}

export default App