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

import guideOfGold from '../materials/talents/gold/guide-gold'
import philosophiesOfGold from '../materials/talents/gold/philosophies-gold'
import teachingsGold from '../materials/talents/gold/teachings-gold'
import dvalinsSigh from '../materials/bosses/dvalins-sigh'
import crownOfSagehood from '../materials/events/crown-sagehood'

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
  description: "beidou.description",
}

export const beidouAscension = [
  [vajradaAmethystSliver, noctilucousJade, treasureHoarderInsignia],
  [vajradaAmethystFragment, lightningPrism, noctilucousJade, treasureHoarderInsignia],
  [vajradaAmethystFragment, lightningPrism, noctilucousJade, silverRavenInsignia],
  [vajradaAmethystChunk, lightningPrism, noctilucousJade, silverRavenInsignia],
  [vajradaAmethystChunk, lightningPrism, noctilucousJade, goldenRavenInsignia],
  [vajradaAmethystGemstone, lightningPrism, noctilucousJade, goldenRavenInsignia],
]

const beidouTalents = [
  {
    name: "oceanborne",
    requirements: [
      [teachingsGold, treasureHoarderInsignia],
      [guideOfGold, silverRavenInsignia], [guideOfGold, silverRavenInsignia], [guideOfGold, silverRavenInsignia], [guideOfGold, silverRavenInsignia],
      [philosophiesOfGold, goldenRavenInsignia, dvalinsSigh], [philosophiesOfGold, goldenRavenInsignia, dvalinsSigh], [philosophiesOfGold, goldenRavenInsignia, dvalinsSigh],
      [philosophiesOfGold, goldenRavenInsignia, dvalinsSigh, crownOfSagehood],
    ]
  },
  {
    name: "tidecaller",
    requirements: [
      [teachingsGold, treasureHoarderInsignia],
      [guideOfGold, silverRavenInsignia], [guideOfGold, silverRavenInsignia], [guideOfGold, silverRavenInsignia], [guideOfGold, silverRavenInsignia],
      [philosophiesOfGold, goldenRavenInsignia, dvalinsSigh], [philosophiesOfGold, goldenRavenInsignia, dvalinsSigh], [philosophiesOfGold, goldenRavenInsignia, dvalinsSigh],
      [philosophiesOfGold, goldenRavenInsignia, dvalinsSigh, crownOfSagehood],]
  },
  {
    name: "stormbreaker",
    requirements: [
      [teachingsGold, treasureHoarderInsignia],
      [guideOfGold, silverRavenInsignia], [guideOfGold, silverRavenInsignia], [guideOfGold, silverRavenInsignia], [guideOfGold, silverRavenInsignia],
      [philosophiesOfGold, goldenRavenInsignia, dvalinsSigh], [philosophiesOfGold, goldenRavenInsignia, dvalinsSigh], [philosophiesOfGold, goldenRavenInsignia, dvalinsSigh],
      [philosophiesOfGold, goldenRavenInsignia, dvalinsSigh, crownOfSagehood],]
  }
]

export const getBeidou = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...beidou,
    ...(withAscension ? { ascension: beidouAscension } : {}),
    ...(withTalents ? { talents: beidouTalents } : {})
  }
}

export default {
  id: 3,
  get: getBeidou
}
