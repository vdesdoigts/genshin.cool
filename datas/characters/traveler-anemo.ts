import { IGetCharacterOptions } from './types'

import brilliantDiamondChunk from '../materials/gems/brilliant-diamond/brilliant-diamond-chunk'
import brilliantDiamondFragment from '../materials/gems/brilliant-diamond/brilliant-diamond-fragment'
import brilliantDiamondGemstone from '../materials/gems/brilliant-diamond/brilliant-diamond-gemstone'
import brilliantDiamondSliver from '../materials/gems/brilliant-diamond/brilliant-diamond-sliver'

import damagedMask from '../materials/common/mask/damaged-mask'
import ominousMask from '../materials/common/mask/ominous-mask'
import stainedMask from '../materials/common/mask/stained-mask'
import windwheelAster from '../materials/wild/windwheel-aster'

export const travelerAnemo = {
  id: 21,
  name: "Traveler Anemo",
  titles: [
    "outlander",
    "honorary_knight"
  ],
  element: "anemo",
  weaponType: "sword",
  gender: "male",
  rarity: 5,
  images: {
    image: "/images/characters/traveler-thumb.png",
  },
  affiliation: "neutral",
  description: "A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.",
}

export const travelerAnemoAscension = [
  [brilliantDiamondSliver, windwheelAster, damagedMask],
  [brilliantDiamondFragment, null, windwheelAster, damagedMask],
  [brilliantDiamondFragment, null, windwheelAster, stainedMask],
  [brilliantDiamondChunk, null, windwheelAster, stainedMask],
  [brilliantDiamondChunk, null, windwheelAster, ominousMask],
  [brilliantDiamondGemstone, null, windwheelAster, ominousMask],
]

export const getTravelerAnemo = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...travelerAnemo,
    ...(withAscension ? { ascension: travelerAnemoAscension } : {})
  }
}

export default {
  id: 21,
  get: getTravelerAnemo
}
