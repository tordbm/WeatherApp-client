import type { UUID } from 'crypto'

export interface User {
  id: UUID
  username: string
  email: string
  created_at: string
  disabled_at: string
  disabled: boolean
}
