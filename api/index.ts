import characters from '../data/characters'
import weapons from '../data/weapons'
import weaponmaterialtypes from '../data/materials/weapons'

const getCharacters = () => characters.map((character) => ({ id: character.id,  ...character.get() }))

const getCharacterById = (id, options) => {
  const character = characters.find((character) => character.id === id)

  if (character) {
    return {
      id: character.id,
      ...character.get(options)
    }
  }

  return
}

const getCharacterByName = (name, options) => {
  const character = characters.find((character) => character.get().name.toLowerCase() === name)

  if (character) {
    return {
      id: character.id,
      ...character.get(options)
    }
  }

  return
}

const getCharacterByIds = (ids, options) => ids.map((id) => getCharacterById(id, options))

const getWeapons = () => weapons
const getWeaponById = (id) => weapons.find((weapon) => weapon.id === id)
const getWeaponMaterialTypeById = (id) => (weaponmaterialtypes.find((weaponmaterialtype) => weaponmaterialtype.id === id))

export default {
  getCharacters,
  getCharacterById,
  getCharacterByName,
  getCharacterByIds,
  getWeapons,
  getWeaponById,
  getWeaponMaterialTypeById,
}
