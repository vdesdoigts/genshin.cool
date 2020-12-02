import { RootState } from '../store'

export const getCurrentLang = (state: RootState) => state.options.lang
