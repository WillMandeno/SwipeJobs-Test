import { useState } from "react"
import type { Job } from "../types/jobs"

type Props = {
  job: Job
}

export default function JobCard({ job }: Props) {

  const [expanded, setExpanded] = useState(false)

  const wage = (job.wagePerHourInCents / 100).toFixed(2)

  return (
    <div className="job-card">

      <img
        className="job-image"
        src={job.jobTitle.imageUrl}
        alt={job.jobTitle.name}
      />

      <div className="job-header">
        <h2>{job.jobTitle.name}</h2>
        <p>{job.company.name}</p>
      </div>

      <div className="job-stats">
        <div>
          <span>Distance</span>
          <strong>{job.milesToTravel.toFixed(1)} miles</strong>
        </div>

        <div>
          <span>Hourly Rate</span>
          <strong>${wage}</strong>
        </div>
      </div>

      <button
        className="expand-btn"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Hide Details ▲" : "View Details ▼"}
      </button>

      {expanded && (

        <div className="job-details">

          <div className="section">
            <h4>Shift Dates</h4>

            {job.shifts.map((shift, i) => {
              const start = new Date(shift.startDate)
              const end = new Date(shift.endDate)

              return (
                <p key={i}>
                  {start.toLocaleDateString()}{" "}
                  {start.toLocaleTimeString()} -
                  {end.toLocaleTimeString()}
                </p>
              )
            })}
          </div>

          <div className="section">
            <h4>Location</h4>
            <p>{job.company.address.formattedAddress}</p>
          </div>

          {job.requirements && (
            <div className="section">
                <h4>Requirements</h4>
                {job.requirements.map((r) => (
                <p key={r}>{r}</p>
                ))}
            </div>
            )}

          <div className="section">
            <h4>Report To</h4>
            <p>
              {job.company.reportTo.name}
              {job.company.reportTo.phone &&
                ` (${job.company.reportTo.phone})`}
            </p>
          </div>

          <div className="actions">
            <button className="reject">No Thanks</button>
            <button className="accept">I'll Take it</button>
          </div>

        </div>

      )}

    </div>
  )
}