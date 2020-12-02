import { createModel } from '@rematch/core'
import produce from 'immer'
import { ILangs } from '../../types'

export interface IOptionsState {
  lang: ILangs
}

const initialState: IOptionsState = {
  lang: 'en'
}

export const options = createModel()({
  state: initialState,
  reducers: {
    setLang(state, payload: IOptionsState['lang']) {
      return produce(state, draftState => {
        draftState.lang = payload
      })
    },
  }
})
