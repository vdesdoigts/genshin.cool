import { createModel } from '@rematch/core'
import findIndex from 'lodash.findindex'
import produce from 'immer'
import { ICharacter, IProfile, IRosterCharacter, IWeapon } from '../../types'

export const defaultState = {
  currentProfileIndex: 0,
  userProfiles: [
    {
      name: 'Profile 1',
      roster: [
        { character: { id: 1 }, weapon: { id : 62 }},
        { character: { id: 10 }, weapon: { id : 74 }},
        { character: { id: 13 }, weapon: { id : 25 }},
      ],
      disabledRoster: [],
      armory: [
        { weapon: { id : 62 }},
        { weapon: { id : 74 }},
        { weapon: { id : 25 }},
      ],
      disabledArmory: [],
    },
  ],
}

export interface IProfileState {
  currentProfileIndex: number
  userProfiles: IProfile[]
}

const initialState: IProfileState = defaultState

export const profile = createModel()({
  state: initialState,
  reducers: {
    reset() {
      return defaultState
    },
    addProfile(state) {
      return produce(state, draftState => {
        const profileIndex = state.userProfiles.length

        draftState.userProfiles.push({
          name: `Profile ${profileIndex + 1}`,
          roster: [{ character: { id: 8 }, weapon: { id: 29 }}, { character: { id: 2 }, weapon: { id: 52 }}, { character: { id: 24 }, weapon: { id: 77 }}],
          disabledRoster: [],
          armory: [],
          disabledArmory: [],
        })
        draftState.currentProfileIndex = profileIndex
      })
    },
    deleteProfile(state, payload: number) {
      return produce(state, drafState => {
        if (drafState.userProfiles.length > 1) {
          drafState.currentProfileIndex = 0
          drafState.userProfiles.splice(payload, 1)
        }
      })
    },
    updateProfileName(state, payload: { index: number, name: string }) {
      return produce(state, draftState => {
        draftState.userProfiles[payload.index].name = payload.name
      })
    },
    setCurrentProfile(state, payload: number) {
      return produce(state, drafState => {
        if (state.userProfiles[payload]) {
          drafState.currentProfileIndex = payload
        }
      })
    },
    addCharacter(state, payload: ICharacter['id']) {
      return produce(state, draftState => {
        const { currentProfileIndex } = state
        const currentRoster = draftState.userProfiles[currentProfileIndex].roster

        currentRoster.push({
          character: { id: payload }
        })
      })
    },
    toggleCharacter(state, payload: ICharacter['id']) {
      return produce(state, draftState => {
        const { currentProfileIndex } = state
        const currentRoster = state.userProfiles[currentProfileIndex].roster
        const currentDisabledRoster = state.userProfiles[currentProfileIndex].disabledRoster
        const characterIndex = findIndex(currentRoster, (roster) => roster.character.id === payload)
        const disabledCharacterIndex = findIndex(currentDisabledRoster, (roster) => roster.character.id === payload)

        if (characterIndex !== -1) {
          const currentCharacter = state.userProfiles[currentProfileIndex].roster[characterIndex]
          draftState.userProfiles[currentProfileIndex].roster = state.userProfiles[currentProfileIndex].roster.filter((roster) => roster.character.id !== payload)
          draftState.userProfiles[currentProfileIndex].disabledRoster.push(currentCharacter)
        } else {
          if (disabledCharacterIndex !== -1) {
            const currentDisabledCharacter = state.userProfiles[currentProfileIndex].disabledRoster[disabledCharacterIndex]
            draftState.userProfiles[currentProfileIndex].disabledRoster = state.userProfiles[currentProfileIndex].disabledRoster.filter((roster) => roster.character.id !== payload)
            draftState.userProfiles[currentProfileIndex].roster.push(currentDisabledCharacter)
          } else {
            draftState.userProfiles[currentProfileIndex].roster.push({
              character: { id: payload }
            })
          }
        }
      })
    },
    updateCharacterAsension(state, payload: { character: ICharacter['id'], ascension: IRosterCharacter['character']['ascension'] }) {
      return produce(state, draftState => {
        const { currentProfileIndex } = state
        const currentRoster = state.userProfiles[currentProfileIndex].roster
        const characterIndex = findIndex(currentRoster, (roster) => roster.character.id === payload.character)

        if (characterIndex !== -1) {
          draftState.userProfiles[currentProfileIndex].roster[characterIndex] = {
            ...state.userProfiles[currentProfileIndex].roster[characterIndex],
            character: {
              ...state.userProfiles[currentProfileIndex].roster[characterIndex].character,
              ascension: payload.ascension,
            }
          }
        }
      })
    },
    toggleRoster(state, payload: number) {
      return produce(state, draftState => {
        const { currentProfileIndex } = state
        draftState.userProfiles[currentProfileIndex].roster[payload].isDisabled = !state.userProfiles[currentProfileIndex].roster[payload].isDisabled
      })
    },
    addWeapon(state, payload: { character: ICharacter['id'], weapon: IWeapon['id'] }) { // from roster weapon
      return produce(state, draftState => {
        const { currentProfileIndex } = state
        const currentRoster = state.userProfiles[currentProfileIndex].roster
        const characterIndex = findIndex(currentRoster, (roster) => roster.character.id === payload.character)

        if (characterIndex !== -1) {
          draftState.userProfiles[currentProfileIndex].roster[characterIndex] = {
            ...state.userProfiles[currentProfileIndex].roster[characterIndex],
            weapon: {
              id: payload.weapon,
            }
          }
        }
      })
    },
    toggleArmory(state, payload: number) {
      return produce(state, draftState => {
        const { currentProfileIndex } = state
        draftState.userProfiles[currentProfileIndex].armory[payload].isDisabled = !state.userProfiles[currentProfileIndex].armory[payload].isDisabled
      })
    },
    toggleWeapon(state, payload: IWeapon['id']) { // from armory
      return produce(state, draftState => {
        const { currentProfileIndex } = state
        const currentArmory = state.userProfiles[currentProfileIndex].armory
        const currentDisabledArmory = state.userProfiles[currentProfileIndex].disabledArmory
        const weaponIndex = findIndex(currentArmory, (armory) => armory.weapon.id === payload)
        const disabledWeaponIndex = findIndex(currentDisabledArmory, (armory) => armory.weapon.id === payload)

        if (weaponIndex !== -1) {
          const currentWeapon = state.userProfiles[currentProfileIndex].armory[weaponIndex]
          draftState.userProfiles[currentProfileIndex].armory = state.userProfiles[currentProfileIndex].armory.filter((armory) => armory.weapon.id !== payload)
          draftState.userProfiles[currentProfileIndex].disabledArmory.push(currentWeapon)
        } else {
          if (disabledWeaponIndex !== -1) {
            const currentDisabledWeapon = state.userProfiles[currentProfileIndex].disabledArmory[disabledWeaponIndex]
            draftState.userProfiles[currentProfileIndex].disabledArmory = state.userProfiles[currentProfileIndex].disabledArmory.filter((armory) => armory.weapon.id !== payload)
            draftState.userProfiles[currentProfileIndex].armory.push(currentDisabledWeapon)
          } else {
            draftState.userProfiles[currentProfileIndex].armory.push({
              weapon: { id: payload }
            })
          }
        }
      })
    },
  }
})
