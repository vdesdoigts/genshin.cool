import { IGetCharacterOptions } from './types'

import vajradaAmethystChunk from '../materials/gems/vajrada-amethyst/vajrada-amethyst-chunk'
import vajradaAmethystFragment from '../materials/gems/vajrada-amethyst/vajrada-amethyst-fragment'
import vajradaAmethystGemstone from '../materials/gems/vajrada-amethyst/vajrada-amethyst-gemstone'
import vajradaAmethystSliver from '../materials/gems/vajrada-amethyst/vajrada-amethyst-sliver'

import damagedMask from '../materials/common/mask/damaged-mask'
import ominousMask from '../materials/common/mask/ominous-mask'
import stainedMask from '../materials/common/mask/stained-mask'
import lightningPrism from '../materials/bosses/lightning-prism'
import wolfhook from '../materials/wild/wolfhook'

export const razor = {
  name: "Razor",
  titles: [
    "n/a"
  ],
  element: "electro",
  weaponType: "claymore",
  gender: "male",
  region: "mondstadt",
  rarity: 4,
  images: {
    image: "/images/characters/razor-thumb.png",
  },
  affiliation: "n/a",
  description: "Some say he is an orphan raised by wolves. Others say he is a wolf spirit in human form. He is most at home in the wild, fighting with claw and thunder. To this day the wolf boy can be found prowling the forest, where he and his wolf pack hunt to survive using nothing more than their animal instincts.",
}

export const razorAscension = [
  [vajradaAmethystSliver, wolfhook, damagedMask],
  [vajradaAmethystFragment, lightningPrism, wolfhook, damagedMask],
  [vajradaAmethystFragment, lightningPrism, wolfhook, stainedMask],
  [vajradaAmethystChunk, lightningPrism, wolfhook, stainedMask],
  [vajradaAmethystChunk, lightningPrism, wolfhook, ominousMask],
  [vajradaAmethystGemstone, lightningPrism, wolfhook, ominousMask],
]

export const getRazor = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...razor,
    ...(withAscension ? { ascension: razorAscension } : {})
  }
}

export default {
  id: 18,
  get: getRazor
}
