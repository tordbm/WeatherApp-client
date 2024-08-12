import type { UUID } from 'crypto'
import { options } from 'node_modules/axios/index.cjs'

export interface User {
  id: UUID
  username: string
  email: string
  created_at: string
  disabled_at: string
  disabled: boolean
}

export interface GradientOptions {
  startColor: string
  middleColor: string
  endColor: string
  startInterval: number
  middleInterval: number
  endInterval: number
}
