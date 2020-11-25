import { createModel } from '@rematch/core'
import produce from 'immer'
import { format } from 'date-fns'
import { IArtifactItem, IArtifactType, ICharacter, IProfile, IRoster, IRosterCharacter, IWeapon } from '../../types'

export interface IAppState {
  currentSelectedDay: string
}

const initialState: IAppState = {
  currentSelectedDay: format(new Date(), 'EEEE')
}

export const app = createModel()({
  state: initialState,
  reducers: {
    setDay(state, payload: string) {
      return produce(state, draftState => {
        draftState.currentSelectedDay = payload
      })
    },
  }
})
