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

import guideOfResistance from '../materials/talents/resistance/guide-resistance'
import philosophiesOfResistance from '../materials/talents/resistance/philosophies-resistance'
import teachingsResistance from '../materials/talents/resistance/teachings-resistance'
import dvalinsClaw from '../materials/bosses/dvalins-claw'
import crownOfSagehood from '../materials/events/crown-sagehood'

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
  affiliation: null,
  description: "razor.description",
}

export const razorAscension = [
  [vajradaAmethystSliver, wolfhook, damagedMask],
  [vajradaAmethystFragment, lightningPrism, wolfhook, damagedMask],
  [vajradaAmethystFragment, lightningPrism, wolfhook, stainedMask],
  [vajradaAmethystChunk, lightningPrism, wolfhook, stainedMask],
  [vajradaAmethystChunk, lightningPrism, wolfhook, ominousMask],
  [vajradaAmethystGemstone, lightningPrism, wolfhook, ominousMask],
]

const razorTalents = [
  {
    name: "steel_fang",
    requirements: [
      [teachingsResistance, damagedMask],
      [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask],
      [philosophiesOfResistance, ominousMask, dvalinsClaw], [philosophiesOfResistance, ominousMask, dvalinsClaw], [philosophiesOfResistance, ominousMask, dvalinsClaw],
      [philosophiesOfResistance, ominousMask, dvalinsClaw, crownOfSagehood],
    ]
  },
  {
    name: "claw_and_thunder",
    requirements: [
      [teachingsResistance, damagedMask],
      [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask],
      [philosophiesOfResistance, ominousMask, dvalinsClaw], [philosophiesOfResistance, ominousMask, dvalinsClaw], [philosophiesOfResistance, ominousMask, dvalinsClaw],
      [philosophiesOfResistance, ominousMask, dvalinsClaw, crownOfSagehood],
    ]
  },
  {
    name: "lightning_fang",
    requirements: [
      [teachingsResistance, damagedMask],
      [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask],
      [philosophiesOfResistance, ominousMask, dvalinsClaw], [philosophiesOfResistance, ominousMask, dvalinsClaw], [philosophiesOfResistance, ominousMask, dvalinsClaw],
      [philosophiesOfResistance, ominousMask, dvalinsClaw, crownOfSagehood],
    ]
  }
]

export const getRazor = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...razor,
    ...(withAscension ? { ascension: razorAscension } : {}),
    ...(withTalents ? { talents: razorTalents } : {})
  }
}

export default {
  id: 18,
  get: getRazor
}
