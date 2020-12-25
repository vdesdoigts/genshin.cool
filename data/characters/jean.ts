import { IGetCharacterOptions } from './types'

import vayudaTurquoiseChunk from '../materials/gems/vayuda-turquoise/vayuda-turquoise-chunk'
import vayudaTurquoiseFragment from '../materials/gems/vayuda-turquoise/vayuda-turquoise-fragment'
import vayudaTurquoiseGemstone from '../materials/gems/vayuda-turquoise/vayuda-turquoise-gemstone'
import vayudaTurquoiseSliver from '../materials/gems/vayuda-turquoise/vayuda-turquoise-sliver'

import damagedMask from '../materials/common/mask/damaged-mask'
import ominousMask from '../materials/common/mask/ominous-mask'
import stainedMask from '../materials/common/mask/stained-mask'
import hurricaneSeed from '../materials/bosses/hurricane-seed'
import dandelionSeed from '../materials/wild/dandelion-seed'

import guideOfResistance from '../materials/talents/resistance/guide-resistance'
import philosophiesOfResistance from '../materials/talents/resistance/philosophies-resistance'
import teachingsResistance from '../materials/talents/resistance/teachings-resistance'
import dvalinsPlume from '../materials/bosses/dvalins-plume'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const jean = {
  name: "Jean",
  titles: [
    "acting_grand_master",
    "dandelion_knight",
    "lionfang_knight"
  ],
  element: "anemo",
  weaponType: "sword",
  gender: "female",
  region: "mondstadt",
  rarity: 5,
  images: {
    image: "/images/characters/jean-thumb.png",
  },
  affiliation: "knights_of_favonius",
  description: "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt. She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.",
}

export const jeanAscension = [
  [vayudaTurquoiseSliver, dandelionSeed, damagedMask],
  [vayudaTurquoiseFragment, hurricaneSeed, dandelionSeed, damagedMask],
  [vayudaTurquoiseFragment, hurricaneSeed, dandelionSeed, stainedMask],
  [vayudaTurquoiseChunk, hurricaneSeed, dandelionSeed, stainedMask],
  [vayudaTurquoiseChunk, hurricaneSeed, dandelionSeed, ominousMask],
  [vayudaTurquoiseGemstone, hurricaneSeed, dandelionSeed, ominousMask],
]

const jeanTalents = [
  {
    name: "favonius_bladework",
    requirements: [
      [teachingsResistance, damagedMask],
      [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask],
      [philosophiesOfResistance, ominousMask, dvalinsPlume], [philosophiesOfResistance, ominousMask, dvalinsPlume], [philosophiesOfResistance, ominousMask, dvalinsPlume],
      [philosophiesOfResistance, ominousMask, dvalinsPlume, crownOfSagehood],
    ]
  },
  {
    name: "gale_blade",
    requirements: [
      [teachingsResistance, damagedMask],
      [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask],
      [philosophiesOfResistance, ominousMask, dvalinsPlume], [philosophiesOfResistance, ominousMask, dvalinsPlume], [philosophiesOfResistance, ominousMask, dvalinsPlume],
      [philosophiesOfResistance, ominousMask, dvalinsPlume, crownOfSagehood],
    ]
  },
  {
    name: "dandelion_breeze",
    requirements: [
      [teachingsResistance, damagedMask],
      [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask],
      [philosophiesOfResistance, ominousMask, dvalinsPlume], [philosophiesOfResistance, ominousMask, dvalinsPlume], [philosophiesOfResistance, ominousMask, dvalinsPlume],
      [philosophiesOfResistance, ominousMask, dvalinsPlume, crownOfSagehood],
    ]
  }
]

export const getJean = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...jean,
    ...(withAscension ? { ascension: jeanAscension } : {}),
    ...(withTalents ? { talents: jeanTalents } : {})
  }
}

export default {
  id: 9,
  get: getJean
}
