import artifacts from '../data/artifacts'
import characters from '../data/characters'
import talentmaterialtypes from '../data/talentmaterialtypes'
import weapons from '../data/weapons'
import weaponmaterialtypes from '../data/weaponmaterialtypes'
import {
  IArtifactItem,
  IArtifactType,
  IArtifactCollection,
  ICharacter,
  IRosterCharacter,
  ITalentMaterialType,
  IWeapon,
  IWeaponMaterialType,
} from '../types'

export const getCharacters = () => characters

export const getArtifactById = (id: IArtifactItem['id'], type: IArtifactType) => artifacts.find((artifact) => artifact.id === id)![type] as IArtifactItem
export const getCharacterById = (id: ICharacter['id']) => characters.find((character) => character.id === id) as ICharacter
export const getWeaponById = (id: IWeapon['id']) => weapons.find((weapon) => weapon.id === id) as IWeapon

export const getArtifactsCharacter = (artifactsCharacter?: IRosterCharacter['artifacts']) => {
  const { flower, plume, sands, goblet, circlet } = artifactsCharacter || {}
  const artifacts: IArtifactCollection = {}

  if (flower) {
    artifacts.flower = getArtifactById(flower.id, 'flower')
  }
  if (plume) {
    artifacts.plume = getArtifactById(flower.id, 'plume')
  }
  if (sands) {
    artifacts.sands = getArtifactById(flower.id, 'sands')
  }
  if (goblet) {
    artifacts.goblet = getArtifactById(flower.id, 'goblet')
  }
  if (circlet) {
    artifacts.circlet = getArtifactById(flower.id, 'circlet')
  }

  return artifacts
}

export const getTalentMaterialTypeById = (id: ITalentMaterialType['id']) => (talentmaterialtypes.find((talentmaterialtype) => talentmaterialtype.id === id) as ITalentMaterialType)
export const getWeaponMaterialTypeById = (id: IWeaponMaterialType['id']) => (weaponmaterialtypes.find((weaponmaterialtype) => weaponmaterialtype.id === id) as IWeaponMaterialType)
