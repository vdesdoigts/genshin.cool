import { Models } from '@rematch/core'
import { app } from './app'
import { profile } from './profile'
import { roster } from './roster'

export interface RootModel extends Models<RootModel> {
  app: typeof app
  profile: typeof profile
  roster: typeof roster
}

export const models: RootModel = { app, profile, roster }
