import ascensions from '../datas/characters-ascensions'

export const groupCharactersByAscension = (characters, roster) => {
  const materials = {
    gem: [],
    boss_reward: [],
    common: [],
    wild: [],
  }

  characters.forEach((character) => {
    const rosterItem = roster.find((item) => item.character.id === character.id)
    const rank = rosterItem.character.ascension || 0

    character.ascension[rank].forEach((ascensionItem, index) => {
      if (ascensionItem === null) {
        return
      }
      
      const id = `${ascensionItem.collection || ascensionItem.name}_${rank}`
      const amount = ascensions[rank].amount[index]
      const char = {
        id: character.id,
        name: character.name,
        images: character.images,
        amount,
      }
      const material = materials[ascensionItem.type]?.find((item) => item.collection === ascensionItem.collection && item.name === ascensionItem.name)

      if (material) {
        const materialAmount = material.amounts.find((item) => item.amount === amount)
        if (materialAmount) {
          materialAmount.characters.push(char)
        } else {
          material.amounts.push(
            {
              amount,
              characters: [char]
            }
          )
        }
        sortAmount(material.amounts)
      } else {
        materials[ascensionItem.type].push({
          ...ascensionItem,
          id,
          amounts: [
            {
              amount,
              characters: [char]
            }
          ]
          
        })
      }
    })
  })

  return {
    gems: sort(materials.gem),
    bosses: sort(materials.boss_reward),
    common: sort(materials.common),
    wild: sort(materials.wild),
  }
}

const sort = (materials) => {
  return materials.sort(function (a, b) {
    if (a.id < b.id) { return -1 }
    if (a.id > b.id) { return 1 }
    return 0
  })
}

const sortAmount = (amounts) => {
  return amounts.sort(function (a, b) {
    if (a.amount < b.amount) { return -1 }
    if (a.amount > b.amount) { return 1 }
    return 0
  })
}

export const getNameTranslation = (item) => {
  if (item.collection) {
    return `${item.type}.${item.collection}.${item.name}`
  }

  return `${item.type}.${item.name}`
}
