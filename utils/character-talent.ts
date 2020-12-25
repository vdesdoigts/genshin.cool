import talents from '../datas/characters-talents'
import { sort } from './character-ascension'

export const groupCharactersByTalent = (characters, roster) => {
  const materials = {
    book: [],
    boss_reward: [],
    common: [],
    event: [],
  }

  characters.forEach((character) => {
      character.talents.forEach((talent, talentIndex) => {
        const rosterItem = roster.find((item) => item.character.id === character.id)
        const rank = rosterItem.character.talents ? rosterItem.character.talents[talentIndex] : 0

        talent.requirements[rank].forEach((talentItem, index) => {
          if (talentItem === null) {
            return
          }

          const id = `${talentItem.collection || talentItem.name}_${rank}`
          const amount = talents[rank].amount[index]
          const char = {
            id: character.id,
            name: character.name,
            images: character.images,
            amount,
            talents: [talent.name]
          }
          const material = materials[talentItem.type]?.find((item) => item.name === talentItem.name)

          if (material) {
            const materialAmount = material.amounts.find((item) => item.amount === amount)
            if (materialAmount) {
              const character = materialAmount.characters.find((character) => character.id === char.id)
              if (character) {
                character.talents.push(talent.name)
              } else {
                materialAmount.characters.push(char)
              }
            } else {
              material.amounts.push(
                {
                  amount,
                  characters: [char]
                }
              )
            }
            // sortAmount(material.amounts)
          } else {
            materials[talentItem.type].push({
              ...talentItem,
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
  })

  return {
    books: sort(materials.book),
    bosses: sort(materials.boss_reward),
    common: sort(materials.common),
    events: sort(materials.event),
  }
  // return {
  //   gems: sort(materials.gem),
  //   bosses: sort(materials.boss_reward),
  //   common: sort(materials.common),
  //   wild: sort(materials.wild),
  // }
}
