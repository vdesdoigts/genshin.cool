import { IGetCharacterOptions } from './types'

import vayudaTurquoiseChunk from '../materials/gems/vayuda-turquoise/vayuda-turquoise-chunk'
import vayudaTurquoiseFragment from '../materials/gems/vayuda-turquoise/vayuda-turquoise-fragment'
import vayudaTurquoiseGemstone from '../materials/gems/vayuda-turquoise/vayuda-turquoise-gemstone'
import vayudaTurquoiseSliver from '../materials/gems/vayuda-turquoise/vayuda-turquoise-sliver'

import firmArrowhead from '../materials/common/arrow/firm-arrowhead'
import sharpArrowhead from '../materials/common/arrow/sharp-arrowhead'
import weatheredArrowhead from '../materials/common/arrow/weathered-arrowhead'
import hurricaneSeed from '../materials/bosses/hurricane-seed'
import qingxin from '../materials/wild/qingxin'

export const xiao = {
	id: 25,
  name: "Xiao",
  titles: [
    "guardian_yaksha",
    "nuo_dance_of_evil_conquering",
    "alatus_the_golden_winged_king"
  ],
  element: "anemo",
  weaponType: "polearm",
  gender: "male",
  region: "liyue",
  rarity: 5,
  images: {
    image: "/images/characters/xiao-thumb.png",
  },
  affiliation: "liyue_adeptus",
  description: "One of the \"Mighty and Illuminated Adepti\" guarding Liyue, also heralded as the \"Guardian yaksha.\"\nDespite his appearance as a young man, occasional legends about him have been documented in ancient books for thousands of years.\nHe is especially fond of Wangshu Inn's Almond Tofu.\nThe reason is that the dish tastes just like the \"dreams\" he used to devour.",
}

export const xiaoAscension = [
  [vayudaTurquoiseSliver, qingxin, firmArrowhead],
  [vayudaTurquoiseFragment, hurricaneSeed, qingxin, firmArrowhead],
  [vayudaTurquoiseFragment, hurricaneSeed, qingxin, sharpArrowhead],
  [vayudaTurquoiseChunk, hurricaneSeed, qingxin, sharpArrowhead],
  [vayudaTurquoiseChunk, hurricaneSeed, qingxin, weatheredArrowhead],
  [vayudaTurquoiseGemstone, hurricaneSeed, qingxin, weatheredArrowhead],
]

export const getVenti = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...xiao,
    ...(withAscension ? { ascension: xiaoAscension } : {})
  }
}

export default {
  id: 25,
  get: getVenti
}
