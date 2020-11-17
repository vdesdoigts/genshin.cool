import artifacts from '../../data/artifacts'
import characters from '../../data/characters'
import talentmaterialtypes from '../../data/talentmaterialtypes'
import weapons from '../../data/weapons'
import weaponmaterialtypes from '../../data/weaponmaterialtypes'
import { IArtifactItem, IArtifactType, ICharacter, ITalentMaterialType, IWeapon, IWeaponMaterialType } from '../../types'

export const getArtifactByName = (type: IArtifactType, name: IArtifactItem['name']) => {
  return artifacts.find((artifact) => artifact[type].name === name)![type]
}

export const getCharacterByName = (name: ICharacter['name']) => {
  return (characters.find((character) => character.name === name) as ICharacter)
}

export const getCharacterTalentMaterialType = (name: ICharacter['name']) => {
  const character = getCharacterByName(name)
  return talentmaterialtypes.find((material) => material.name === character?.talentmaterialtype)
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

export const getTalentMaterialTypeByName = (name: ITalentMaterialType['name']) => {
  return (talentmaterialtypes.find((talentmaterialtype) => talentmaterialtype.name === name) as ITalentMaterialType)
}

export const getWeaponByName = (name: IWeapon['name']) => {
  return weapons.find((weapon) => weapon.name === name)
}

export const getWeaponsByType = (type: ICharacter['weapontype']) => {
  return weapons.filter((weapon) => weapon.weapontype === type)
}

export const getWeaponMaterialTypeByName = (name: IWeaponMaterialType['name']) => {
  return (weaponmaterialtypes.find((weaponmaterialtype) => weaponmaterialtype.name === name) as IWeaponMaterialType)
}
