import uniqBy from 'lodash.uniqby'
import findIndex from 'lodash.findindex'
import characters from '../../data/characters'
import { ICharacter } from '../../types'
import { RootState } from '../store'

export const getUserRoster = (state: RootState) => state.roster.userRosters[state.roster.currentRosterIndex].filter((roster) => !roster.isDisabled)
export const getUserRosterNames = (state: RootState) => state.roster.userRosterNames
export const getUserRosterCurrentName = (state: RootState) => state.roster.userRosterNames[state.roster.currentRosterIndex]
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

export const selectWeaponCharacters = (state: RootState) => {
  const weapons = []
  state.roster.userRosters[state.roster.currentRosterIndex].forEach((roster) => {
    if (roster.weapon.name) {
      const weaponIndex = findIndex(weapons, { weapon: { name: roster.weapon.name }})
  
      if (~weaponIndex) {
        weapons[weaponIndex].characters.push({ name: roster.character.name })
      } else {
        weapons.push({
          weapon: { name: roster.weapon.name },
          characters: [
            { name: roster.character.name },
          ],
        })
      }
    }
  })
  return weapons
}
