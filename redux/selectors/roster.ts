import { ICharacter } from '../../types'
import { RootState } from '../store'

export const getUserRoster = (state: RootState) => state.roster.userRosters[state.roster.currentRosterIndex]
export const getUserRosterNames = (state: RootState) => state.roster.userRosterNames
export const getCurrentRosterIndex = (state: RootState) => state.roster.currentRosterIndex
export const getUserRosterCharacters = (state: RootState) => state.roster.userRosters[state.roster.currentRosterIndex].map((roster) => (
  roster.character
))
export const selectArtifactsCharacter = (state: RootState, character: ICharacter['name']) => {
  const item = state.roster.userRosters[state.roster.currentRosterIndex].find((roster) => roster.character.name === character)
  return item.artifacts
}

export const selectWeaponCharacter = (state: RootState, character: ICharacter['name']) => {
  const item = state.roster.userRosters[state.roster.currentRosterIndex].find((roster) => roster.character.name === character)
  return item.weapon
}
