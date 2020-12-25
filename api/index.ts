import characters from '../data/characters'

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

export default {
  getCharacters,
  getCharacterById,
  getCharacterByName,
  getCharacterByIds,
}
