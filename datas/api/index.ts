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

export default {
  getCharacterById,
}
