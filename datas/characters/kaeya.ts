import { IGetCharacterOptions } from './types'

import shivadaJadeChunk from '../materials/gems/shivada-jade/shivada-jade-chunk'
import shivadaJadeFragment from '../materials/gems/shivada-jade/shivada-jade-fragment'
import shivadaJadeGemstone from '../materials/gems/shivada-jade/shivada-jade-gemstone'
import shivadaJadeSliver from '../materials/gems/shivada-jade/shivada-jade-sliver'

import goldenRavenInsignia from '../materials/common/treasure-insignia/golden-raven-insignia'
import silverRavenInsignia from '../materials/common/treasure-insignia/silver-raven-insignia'
import treasureHoarderInsignia from '../materials/common/treasure-insignia/treasure-hoarder-insignia'
import hoarfrostCore from '../materials/bosses/hoarfrost-core'
import callaLily from '../materials/wild/calla-lily'

export const kaeya = {
  name: "Kaeya",
  titles: [
    "cavalry_captain"
  ],
  element: "cryo",
  weaponType: "sword",
  gender: "male",
  region: "mondstadt",
  rarity: 4,
  images: {
    image: "/images/characters/kaeya-thumb.png",
  },
  affiliation: "knights_of_favonius",
  description: "In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems. Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has...",
}

export const chongyunAscension = [
  [shivadaJadeSliver, callaLily, treasureHoarderInsignia],
  [shivadaJadeFragment, hoarfrostCore, callaLily, treasureHoarderInsignia],
  [shivadaJadeFragment, hoarfrostCore, callaLily, silverRavenInsignia],
  [shivadaJadeChunk, hoarfrostCore, callaLily, silverRavenInsignia],
  [shivadaJadeChunk, hoarfrostCore, callaLily, goldenRavenInsignia],
  [shivadaJadeGemstone, hoarfrostCore, callaLily, goldenRavenInsignia],
]

export const getKaeya = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...kaeya,
    ...(withAscension ? { ascension: chongyunAscension } : {})
  }
}

export default {
  id: 10,
  get: getKaeya
}
