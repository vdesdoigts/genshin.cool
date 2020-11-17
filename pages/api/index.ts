import artifacts from '../../data/artifacts'
import characters from '../../data/characters'
import weapons from '../../data/weapons'
import { IArtifactItem, IArtifactType, ICharacter, IWeapon } from '../../types'

export const getArtifactByName = (type: IArtifactType, name: IArtifactItem['name']) => {
  return artifacts.find((artifact) => artifact[type].name === name)![type]
}

export const getCharacterByName = (name: ICharacter['name']) => {
  return name ? (characters.find((character) => character.name === name) as ICharacter) : null
}

export const getCharacterArtifacts = (artifacts: {
  flower: { name: string | null }
  plume: { name: string | null }
  sands: { name: string | null }
  goblet: { name: string | null }
  circlet: { name: string | null }
}) => {
  const { flower, plume, sands, goblet, circlet } = artifacts

  return {
    flower: flower ? getArtifactByName('flower', flower.name) : null,
    plume: plume ? getArtifactByName('plume', plume.name) : null,
    sands: sands ? getArtifactByName('sands', sands.name) : null,
    goblet: goblet ? getArtifactByName('goblet', goblet.name) : null,
    circlet: circlet ? getArtifactByName('circlet', circlet.name) : null,
  }
}

export const getWeaponByName = (name: IWeapon['name']) => {
  return weapons.find((weapon) => weapon.name === name)
}

export const getWeaponsByType = (type: ICharacter['weapontype']) => {
  return weapons.filter((weapon) => weapon.weapontype === type)
}
