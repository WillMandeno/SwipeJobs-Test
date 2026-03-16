import type { Address } from "./index.ts"

export interface Worker {
  workerId: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  address: Address
  maxJobDistance: number
}