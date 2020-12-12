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
    card: "/gensin-impact/images/0/0e/Character_Jean_Card.jpg",
    portrait: "/gensin-impact/images/0/02/Character_Jean_Portrait.png"
  },
  cv: {
    english: "Stephanie Southerland",
    japanese: "Chiwa Saitō",
    korean: "Yeong-mi Ahn",
    chinese: "Su Lin"
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

export const getJean = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...jean,
    ...(withAscension ? { ascension: jeanAscension } : {})
  }
}

export default {
  id: 9,
  get: getJean
}
