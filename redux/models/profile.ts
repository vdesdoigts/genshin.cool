import { createModel } from '@rematch/core'
import findIndex from 'lodash.findindex'
import produce from 'immer'
import { IArtifactItem, IArtifactType, ICharacter, IProfile, IRoster, IRosterCharacter, IWeapon } from '../../types'

export interface IProfileState {
  currentProfileIndex: number
  userProfiles: IProfile[]
}

const initialState: IProfileState = {
  currentProfileIndex: 0,
  userProfiles: [
    {
      name: 'Profile 1',
      roster: [
        { character: { id: 2 }, weapon: { id : 2 }},
        { character: { id: 10 }},
        { character: { id: 13 }, weapon: { id : 2 }},
        { isDisabled: true, character: { id: 4 }},
        { character: { id: 5 }},
        { character: { id: 8 }, weapon: { id : 3 }},
        { character: { id: 20 }, weapon: { id : 3 }},
      ],
      disabledRoster: [
        { character: { id: 1 }},
      ],
    },
  ],
}

export const profile = createModel()({
  state: initialState,
  reducers: {
    addProfile(state) {
      return produce(state, draftState => {
        const profileIndex = state.userProfiles.length

        draftState.userProfiles.push({
          name: `Profile ${profileIndex + 1}`,
          roster: [{ character: { id: 2 }}],
          disabledRoster: [],
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
    toggleRoster(state, payload: number) {
      return produce(state, draftState => {
        const { currentProfileIndex } = state
        draftState.userProfiles[currentProfileIndex].roster[payload].isDisabled = !state.userProfiles[currentProfileIndex].roster[payload].isDisabled
      })
    },
    addWeapon(state, payload: { character: ICharacter['id'], weapon: IWeapon['id'] }) {
      return produce(state, draftState => {
        const { currentProfileIndex } = state
        const currentRoster = state.userProfiles[currentProfileIndex].roster
        const characterIndex = findIndex(currentRoster, (roster) => roster.character.id === payload.character)

        console.log('characterIndex: ', characterIndex)
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
  }
})
