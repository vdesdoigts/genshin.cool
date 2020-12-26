import { IGetCharacterOptions } from './types'

import vajradaAmethystChunk from '../materials/gems/vajrada-amethyst/vajrada-amethyst-chunk'
import vajradaAmethystFragment from '../materials/gems/vajrada-amethyst/vajrada-amethyst-fragment'
import vajradaAmethystGemstone from '../materials/gems/vajrada-amethyst/vajrada-amethyst-gemstone'
import vajradaAmethystSliver from '../materials/gems/vajrada-amethyst/vajrada-amethyst-sliver'

import firmArrowhead from '../materials/common/arrow/firm-arrowhead'
import sharpArrowhead from '../materials/common/arrow/sharp-arrowhead'
import weatheredArrowhead from '../materials/common/arrow/weathered-arrowhead'
import lightningPrism from '../materials/bosses/lightning-prism'
import smallLampGrass from '../materials/wild/small-lamp-grass'

import guideOfBallad from '../materials/talents/ballad/guide-ballad'
import philosophiesOfBallad from '../materials/talents/ballad/philosophies-ballad'
import teachingsBallad from '../materials/talents/ballad/teachings-ballad'
import spiritLocketOfBoreas from '../materials/bosses/spirit-locket-of-boreas'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const fischl = {
  name: "Fischl",
  titles: [
    "prinzessin_der_verurteilung",
    "sovereign_of_immernachtreich"
  ],
  element: "electro",
  weaponType: "bow",
  gender: "female",
  region: "mondstadt",
  rarity: 4,
  images: {
    image: "/images/characters/fischl-thumb.png",
  },
  affiliation: "adventurers_guild",
  description: "A mysterious girl who calls herself 'Prinzessin der Verurteilung' and travels with a night raven named Oz. Currently serves as an investigator in the Adventurers' Guild. Through her unique abilities, eccentric character, and (while she would never admit it herself) hard work, Fischl has become a rising star among the Adventurers' Guild's investigators, earning the recognition of all.",
}

export const fischlAscension = [
  [vajradaAmethystSliver, smallLampGrass, firmArrowhead],
  [vajradaAmethystFragment, lightningPrism, smallLampGrass, firmArrowhead],
  [vajradaAmethystFragment, lightningPrism, smallLampGrass, sharpArrowhead],
  [vajradaAmethystChunk, lightningPrism, smallLampGrass, sharpArrowhead],
  [vajradaAmethystChunk, lightningPrism, smallLampGrass, weatheredArrowhead],
  [vajradaAmethystGemstone, lightningPrism, smallLampGrass, weatheredArrowhead],
]

const fischlTalents = [
  {
    name: "bolts_of_downfall",
    requirements: [
      [teachingsBallad, firmArrowhead],
      [guideOfBallad, sharpArrowhead], [guideOfBallad, sharpArrowhead], [guideOfBallad, sharpArrowhead], [guideOfBallad, sharpArrowhead],
      [philosophiesOfBallad, weatheredArrowhead, spiritLocketOfBoreas], [philosophiesOfBallad, weatheredArrowhead, spiritLocketOfBoreas], [philosophiesOfBallad, weatheredArrowhead, spiritLocketOfBoreas],
      [philosophiesOfBallad, weatheredArrowhead, spiritLocketOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "nightrider",
    requirements: [
      [teachingsBallad, firmArrowhead],
      [guideOfBallad, sharpArrowhead], [guideOfBallad, sharpArrowhead], [guideOfBallad, sharpArrowhead], [guideOfBallad, sharpArrowhead],
      [philosophiesOfBallad, weatheredArrowhead, spiritLocketOfBoreas], [philosophiesOfBallad, weatheredArrowhead, spiritLocketOfBoreas], [philosophiesOfBallad, weatheredArrowhead, spiritLocketOfBoreas],
      [philosophiesOfBallad, weatheredArrowhead, spiritLocketOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "midnight_phantasmagoria",
    requirements: [
      [teachingsBallad, firmArrowhead],
      [guideOfBallad, sharpArrowhead], [guideOfBallad, sharpArrowhead], [guideOfBallad, sharpArrowhead], [guideOfBallad, sharpArrowhead],
      [philosophiesOfBallad, weatheredArrowhead, spiritLocketOfBoreas], [philosophiesOfBallad, weatheredArrowhead, spiritLocketOfBoreas], [philosophiesOfBallad, weatheredArrowhead, spiritLocketOfBoreas],
      [philosophiesOfBallad, weatheredArrowhead, spiritLocketOfBoreas, crownOfSagehood],
    ]
  }
]

export const getFischl = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...fischl,
    ...(withAscension ? { ascension: fischlAscension } : {}),
    ...(withTalents ? { talents: fischlTalents } : {})
  }
}

export default {
  id: 8,
  get: getFischl
}
