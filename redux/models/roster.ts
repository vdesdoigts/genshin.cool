import { createModel } from '@rematch/core'
import findIndex from 'lodash.findindex'
import produce from 'immer'
import { IArtifactItem,IArtifactType, ICharacter, IRoster, IRosterCharacter, IWeapon } from '../../types'

export interface RosterState {
  currentRosterIndex: number
  userRosterNames: string[]
  userRosters: IRoster[]
}

const initialState: RosterState = {
  currentRosterIndex: 0,
  userRosterNames: ['Profile 1'],
  userRosters: [
    [
      {
        character: { name: 'Amber' },
        weapon: { name: null },
        artifacts: { flower: null, plume: null, sands: null, goblet: null, circlet: null }
      },
      {
        character: { name: 'Kaeya' },
        weapon: { name: null },
        artifacts: { flower: null, plume: null, sands: null, goblet: null, circlet: null }
      },
      {
        character: { name: 'Lisa' },
        weapon: { name: null },
        artifacts: { flower: null, plume: null, sands: null, goblet: null, circlet: null }
      }
    ],
  ],
}

export const roster = createModel()({
  state: initialState,
  reducers: {
    addCharacter(state, payload: IRosterCharacter) {
      return produce(state, draftState => {
        const { currentRosterIndex } = state
        const stateCharacterIndex = findIndex(state.userRosters[currentRosterIndex], { character: payload.character })

        if (~stateCharacterIndex) {
          draftState.userRosters[currentRosterIndex][stateCharacterIndex] = {
            ...state.userRosters[currentRosterIndex][stateCharacterIndex],
            isDisabled: false
          }
        } else {
          draftState.userRosters[currentRosterIndex].push(payload)
        }
      })
    },
    addArtifact(state, payload: { character: ICharacter['name'], artifact: IArtifactItem['name'], type: IArtifactType }) {
      return produce(state, draftState => {
        const { currentRosterIndex } = state
        const stateCharacterIndex = findIndex(state.userRosters[currentRosterIndex], { character: { name: payload.character }})

        if (~stateCharacterIndex) {
          draftState.userRosters[currentRosterIndex][stateCharacterIndex] = {
            ...state.userRosters[currentRosterIndex][stateCharacterIndex],
            artifacts: {
              ...state.userRosters[currentRosterIndex][stateCharacterIndex].artifacts,
              [payload.type]: {
                name: payload.artifact,
              }
            }
          }
        }
      })
    },
    addWeapon(state, payload: { character: ICharacter['name'], weapon: IWeapon['name'] }) {
      return produce(state, draftState => {
        const { currentRosterIndex } = state
        const stateCharacterIndex = findIndex(state.userRosters[currentRosterIndex], { character: { name: payload.character }})

        if (~stateCharacterIndex) {
          draftState.userRosters[currentRosterIndex][stateCharacterIndex] = {
            ...state.userRosters[currentRosterIndex][stateCharacterIndex],
            weapon: {
              name: payload.weapon,
            }
          }
        }
      })
    },
    addRoster(state) {
      return produce(state, draftState => {
        const profileIndex = state.userRosters.length

        draftState.userRosters.push([
          {
            character: { name: 'Jean' },
            weapon: { name: null },
            artifacts: { flower: null, plume: null, sands: null, goblet: null, circlet: null }
          },
          {
            character: { name: 'Diluc' },
            weapon: { name: null },
            artifacts: { flower: null, plume: null, sands: null, goblet: null, circlet: null }
          },
          {
            character: { name: 'Venti' },
            weapon: { name: null },
            artifacts: { flower: null, plume: null, sands: null, goblet: null, circlet: null }
          }
        ])
        draftState.userRosterNames.push(`Profile ${profileIndex + 1}`)
        draftState.currentRosterIndex = profileIndex
      })
    },
    setCurrentRosterIndex(state, payload: number) {
      return produce(state, draftState => {
        draftState.currentRosterIndex = payload
      })
    }
  },
})
