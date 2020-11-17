import { Models } from '@rematch/core'
import { roster } from './roster'

export interface RootModel extends Models<RootModel> {
  roster: typeof roster
}

export const models: RootModel = { roster }
