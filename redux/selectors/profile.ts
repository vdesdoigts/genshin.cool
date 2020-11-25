import { RootState } from '../store'
import { ICharacter } from '../../types'

export const getCurrentUserProfile = (state: RootState) => state.profile.userProfiles[state.profile.currentProfileIndex]
export const getCurrentUserProfileIndex = (state: RootState) => state.profile.currentProfileIndex
export const getCurrentUserProfileName = (state: RootState) => state.profile.userProfiles[state.profile.currentProfileIndex].name
export const getCurrentRoster = (state: RootState) => state.profile.userProfiles[state.profile.currentProfileIndex].roster
export const getCurrentEnabledRoster = (state: RootState) => getCurrentRoster(state).filter((roster) => !roster.isDisabled)
export const getCurrentEnabledRosterCharacters = (state: RootState) => getCurrentEnabledRoster(state).map((roster) => roster.character)
export const getCurrentRosterCharacters = (state: RootState) => getCurrentRoster(state).map((roster) => roster.character)
export const getRosterCharacterById = (state: RootState, character: ICharacter['id']) => getCurrentRoster(state).find((roster) => roster.character.id === character)
export const getUserRosterNames = (state: RootState) => state.profile.userProfiles.map((profile) => profile.name)
export const getCurrentRosterWeapons = (state: RootState) => getCurrentRoster(state).map((roster) => roster.weapon)
