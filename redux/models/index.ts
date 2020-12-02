import { Models } from '@rematch/core'
import { app } from './app'
import { options } from './options'
import { profile } from './profile'

export interface RootModel extends Models<RootModel> {
  app: typeof app
  options: typeof options
  profile: typeof profile
}

export const models: RootModel = { app, options, profile }
