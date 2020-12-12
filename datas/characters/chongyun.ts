import { IGetCharacterOptions } from './types'

import shivadaJadeChunk from '../materials/gems/shivada-jade/shivada-jade-chunk'
import shivadaJadeFragment from '../materials/gems/shivada-jade/shivada-jade-fragment'
import shivadaJadeGemstone from '../materials/gems/shivada-jade/shivada-jade-gemstone'
import shivadaJadeSliver from '../materials/gems/shivada-jade/shivada-jade-sliver'

import damagedMask from '../materials/common/mask/damaged-mask'
import ominousMask from '../materials/common/mask/ominous-mask'
import stainedMask from '../materials/common/mask/stained-mask'
import hoarfrostCore from '../materials/bosses/hoarfrost-core'
import corLapis from '../materials/wild/cor-lapis'

export const chongyun = {
  name: "Chongyun",
  titles: [
    "frozen_ardor",
    "banisher_of_evil_and_rumors_thereof"
  ],
  element: "cryo",
  weaponType: "claymore",
  gender: "male",
  region: "liyue",
  rarity: 4,
  images: {
    image: "/images/characters/chongyun-thumb.png",
  },
  cv: {
    english: "Beau Bridgland",
    japanese: "Sōma Saitō",
    korean: "Yang JeongHwa",
    chinese: "Jinchuan"
  },
  affiliation: "n/a",
  description: "An exorcist who roams the land with Liyue as his base of operations, evil spirits fleeing wherever he goes. As the heir to a clan of exorcists, he has always possessed abilities superior to most. However, these abilities are not the result of training, but of an inborn trait - congenital positivity.",
}

export const chongyunAscension = [
  [shivadaJadeSliver, corLapis, damagedMask],
  [shivadaJadeFragment, hoarfrostCore, corLapis, damagedMask],
  [shivadaJadeFragment, hoarfrostCore, corLapis, stainedMask],
  [shivadaJadeChunk, hoarfrostCore, corLapis, stainedMask],
  [shivadaJadeChunk, hoarfrostCore, corLapis, ominousMask],
  [shivadaJadeGemstone, hoarfrostCore, corLapis, ominousMask],
]

export const getChongyun = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...chongyun,
    ...(withAscension ? { ascension: chongyunAscension } : {})
  }
}

export default {
  id: 5,
  get: getChongyun
}
