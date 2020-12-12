import { IGetCharacterOptions } from './types'

import vajradaAmethystChunk from '../materials/gems/vajrada-amethyst/vajrada-amethyst-chunk'
import vajradaAmethystFragment from '../materials/gems/vajrada-amethyst/vajrada-amethyst-fragment'
import vajradaAmethystGemstone from '../materials/gems/vajrada-amethyst/vajrada-amethyst-gemstone'
import vajradaAmethystSliver from '../materials/gems/vajrada-amethyst/vajrada-amethyst-sliver'

import goldenRavenInsignia from '../materials/common/treasure-insignia/golden-raven-insignia'
import silverRavenInsignia from '../materials/common/treasure-insignia/silver-raven-insignia'
import treasureHoarderInsignia from '../materials/common/treasure-insignia/treasure-hoarder-insignia'
import lightningPrism from '../materials/bosses/lightning-prism'
import noctilucousJade from '../materials/wild/noctilucous-jade'

export const beidou = {
  name: "Beidou",
  titles: [
    "uncrowned_lord_of_ocean",
    "queen_of_the_crux_fleet",
    "captain_beidou"
  ],
  element: "electro",
  weaponType: "claymore",
  gender: "female",
  region: "liyue",
  rarity: 4,
  images: {
    image: "/images/characters/beidou-thumb.png",
  },
  affiliation: "crux_fleet",
  description: "Captain of the Crux, with quite the reputation in Liyue. There are those who say she can split mountains and part the sea. Others say she draws lightning through her sword. Some say that even the mightiest of sea beasts are no match for her. For those not from Liyue, it may sound like a hearty joke, but those that have sailed with her will say",
}

export const beidouAscension = [
  [vajradaAmethystSliver, noctilucousJade, treasureHoarderInsignia],
  [vajradaAmethystFragment, lightningPrism, noctilucousJade, treasureHoarderInsignia],
  [vajradaAmethystFragment, lightningPrism, noctilucousJade, silverRavenInsignia],
  [vajradaAmethystChunk, lightningPrism, noctilucousJade, silverRavenInsignia],
  [vajradaAmethystChunk, lightningPrism, noctilucousJade, goldenRavenInsignia],
  [vajradaAmethystGemstone, lightningPrism, noctilucousJade, goldenRavenInsignia],
]

export const getBeidou = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...beidou,
    ...(withAscension ? { ascension: beidouAscension } : {})
  }
}

export default {
  id: 3,
  get: getBeidou
}
