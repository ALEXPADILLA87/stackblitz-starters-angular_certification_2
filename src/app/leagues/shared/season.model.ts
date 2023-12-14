import { Coverage } from "./coverage.model"

export interface Season {
  year: number
  start: string
  end: string
  current: boolean
  coverage: Coverage
}

