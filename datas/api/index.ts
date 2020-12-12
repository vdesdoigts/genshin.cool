import characters from '../characters'

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

const getCharacterByIds = (ids, options) => ids.map((id) => getCharacterById(id, options))

export default {
  getCharacterById,
  getCharacterByIds,
}
