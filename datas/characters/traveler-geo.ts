import { IGetCharacterOptions } from './types'

import brilliantDiamondChunk from '../materials/gems/brilliant-diamond/brilliant-diamond-chunk'
import brilliantDiamondFragment from '../materials/gems/brilliant-diamond/brilliant-diamond-fragment'
import brilliantDiamondGemstone from '../materials/gems/brilliant-diamond/brilliant-diamond-gemstone'
import brilliantDiamondSliver from '../materials/gems/brilliant-diamond/brilliant-diamond-sliver'

import damagedMask from '../materials/common/mask/damaged-mask'
import ominousMask from '../materials/common/mask/ominous-mask'
import stainedMask from '../materials/common/mask/stained-mask'
import windwheelAster from '../materials/wild/windwheel-aster'

export const travelerGeo = {
	id: 22,
  name: "Traveler Geo",
  titles: [
    "outlander",
    "honorary_knight"
  ],
  element: "geo",
  weaponType: "sword",
  gender: "male",
  rarity: 5,
  images: {
    image: "/images/characters/traveler-thumb.png",
    card: "/gensin-impact/images/c/c8/Traveler_Female_Card.jpg",
    portrait: "/gensin-impact/images/2/24/Character_Traveler_%28Female%29_Portrait.png"
  },
  cv: {
    japanese: "Shun Horie",
    korean: "Gyeongtae Lee",
    chinese: "Hailong Dong"
  },
  affiliation: "neutral",
  description: "A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.",
  talentmaterialtype: {
    id: 5,
    name: "Prosperity"
  },
  "ascensionmaterials": [],
  "url": "/wiki/Traveler"
}

export const travelerGeoAscension = [
  [brilliantDiamondSliver, windwheelAster, damagedMask],
  [brilliantDiamondFragment, null, windwheelAster, damagedMask],
  [brilliantDiamondFragment, null, windwheelAster, stainedMask],
  [brilliantDiamondChunk, null, windwheelAster, stainedMask],
  [brilliantDiamondChunk, null, windwheelAster, ominousMask],
  [brilliantDiamondGemstone, null, windwheelAster, ominousMask],
]

export const getTravelerGeo = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...travelerGeo,
    ...(withAscension ? { ascension: travelerGeoAscension } : {})
  }
}

export default {
  id: 22,
  get: getTravelerGeo
}
