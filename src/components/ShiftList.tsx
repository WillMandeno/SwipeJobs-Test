import type { Shift } from "../types/jobs"

type Props = {
  shifts: Shift[]
}

export default function ShiftList({ shifts }: Props) {
  return (
    <div className="section">
      <h4>Shift Dates</h4>

      {shifts.map((shift, i) => {
        const start = new Date(shift.startDate)
        const end = new Date(shift.endDate)

        return (
          <p key={i}>
            {start.toLocaleDateString()}{" "}
            {start.toLocaleTimeString()} -{" "}
            {end.toLocaleTimeString()}
          </p>
        )
      })}

    </div>
  )
}