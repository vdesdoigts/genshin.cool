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

export const getFischl = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...fischl,
    ...(withAscension ? { ascension: fischlAscension } : {})
  }
}

export default {
  id: 8,
  get: getFischl
}
