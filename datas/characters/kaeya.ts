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

import guideOfBallad from '../materials/talents/ballad/guide-ballad'
import philosophiesOfBallad from '../materials/talents/ballad/philosophies-ballad'
import teachingsBallad from '../materials/talents/ballad/teachings-ballad'
import spiritLocketOfBoreas from '../materials/bosses/spirit-locket-of-boreas'
import crownOfSagehood from '../materials/events/crown-sagehood'

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

export const kaeyaAscension = [
  [shivadaJadeSliver, callaLily, treasureHoarderInsignia],
  [shivadaJadeFragment, hoarfrostCore, callaLily, treasureHoarderInsignia],
  [shivadaJadeFragment, hoarfrostCore, callaLily, silverRavenInsignia],
  [shivadaJadeChunk, hoarfrostCore, callaLily, silverRavenInsignia],
  [shivadaJadeChunk, hoarfrostCore, callaLily, goldenRavenInsignia],
  [shivadaJadeGemstone, hoarfrostCore, callaLily, goldenRavenInsignia],
]

const kaeyaTalents = [
  {
    name: "ceremonial_bladework",
    requirements: [
      [teachingsBallad, treasureHoarderInsignia],
      [guideOfBallad, silverRavenInsignia], [guideOfBallad, silverRavenInsignia], [guideOfBallad, silverRavenInsignia], [guideOfBallad, silverRavenInsignia],
      [philosophiesOfBallad, goldenRavenInsignia, spiritLocketOfBoreas], [philosophiesOfBallad, goldenRavenInsignia, spiritLocketOfBoreas], [philosophiesOfBallad, goldenRavenInsignia, spiritLocketOfBoreas],
      [philosophiesOfBallad, goldenRavenInsignia, spiritLocketOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "frostgnaw",
    requirements: [
      [teachingsBallad, treasureHoarderInsignia],
      [guideOfBallad, silverRavenInsignia], [guideOfBallad, silverRavenInsignia], [guideOfBallad, silverRavenInsignia], [guideOfBallad, silverRavenInsignia],
      [philosophiesOfBallad, goldenRavenInsignia, spiritLocketOfBoreas], [philosophiesOfBallad, goldenRavenInsignia, spiritLocketOfBoreas], [philosophiesOfBallad, goldenRavenInsignia, spiritLocketOfBoreas],
      [philosophiesOfBallad, goldenRavenInsignia, spiritLocketOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "glacial_waltz",
    requirements: [
      [teachingsBallad, treasureHoarderInsignia],
      [guideOfBallad, silverRavenInsignia], [guideOfBallad, silverRavenInsignia], [guideOfBallad, silverRavenInsignia], [guideOfBallad, silverRavenInsignia],
      [philosophiesOfBallad, goldenRavenInsignia, spiritLocketOfBoreas], [philosophiesOfBallad, goldenRavenInsignia, spiritLocketOfBoreas], [philosophiesOfBallad, goldenRavenInsignia, spiritLocketOfBoreas],
      [philosophiesOfBallad, goldenRavenInsignia, spiritLocketOfBoreas, crownOfSagehood],
    ]
  }
]

export const getKaeya = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...kaeya,
    ...(withAscension ? { ascension: kaeyaAscension } : {}),
    ...(withTalents ? { talents: kaeyaTalents } : {})
  }
}

export default {
  id: 10,
  get: getKaeya
}
