import { Models } from '@rematch/core'
import { app } from './app'
import { profile } from './profile'

export interface RootModel extends Models<RootModel> {
  app: typeof app
  profile: typeof profile
}

export const models: RootModel = { app, profile }
