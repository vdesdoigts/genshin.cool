import { IGetCharacterOptions } from './types'

import varunadaLazuriteChunk from '../materials/gems/varunada-lazurite/varunada-lazurite-chunk'
import varunadaLazuriteFragment from '../materials/gems/varunada-lazurite/varunada-lazurite-fragment'
import varunadaLazuriteGemstone from '../materials/gems/varunada-lazurite/varunada-lazurite-gemstone'
import varunadaLazuriteSliver from '../materials/gems/varunada-lazurite/varunada-lazurite-sliver'

import damagedMask from '../materials/common/mask/damaged-mask'
import ominousMask from '../materials/common/mask/ominous-mask'
import stainedMask from '../materials/common/mask/stained-mask'
import cleansingHeart from '../materials/bosses/cleansing-heart'
import silkFlower from '../materials/wild/silk-flower'

import guideOfGold from '../materials/talents/gold/guide-gold'
import philosophiesOfGold from '../materials/talents/gold/philosophies-gold'
import teachingsGold from '../materials/talents/gold/teachings-gold'
import tailOfBoreas from '../materials/bosses/tail-of-boreas'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const xingqiu = {
	id: 26,
  name: "Xingqiu",
  titles: [
    "juvenile_galant",
    "guhua_guru_of_feiyun_fame",
    "guhua_geek"
  ],
  element: "hydro",
  weaponType: "sword",
  gender: "male",
  region: "liyue",
  rarity: 4,
  images: {
    image: "/images/characters/xingqiu-thumb.png",
  },
  affiliation: "feiyun_commerce_guild",
  description: "The second son of the Feiyun Commerce Guild, Xingqiu has had a reputation for being studious and polite ever since he was a young child. But there is another side to the mild-mannered Xingqiu everyone knows. A daring, adventurous and much more mischievous side...",
}

export const xingqiuAscension = [
  [varunadaLazuriteSliver, silkFlower, damagedMask],
  [varunadaLazuriteFragment, cleansingHeart, silkFlower, damagedMask],
  [varunadaLazuriteFragment, cleansingHeart, silkFlower, stainedMask],
  [varunadaLazuriteChunk, cleansingHeart, silkFlower, stainedMask],
  [varunadaLazuriteChunk, cleansingHeart, silkFlower, ominousMask],
  [varunadaLazuriteGemstone, cleansingHeart, silkFlower, ominousMask],
]

const xingqiuTalents = [
  {
    name: "guhua_style",
    requirements: [
      [teachingsGold, damagedMask],
      [guideOfGold, stainedMask], [guideOfGold, stainedMask], [guideOfGold, stainedMask], [guideOfGold, stainedMask],
      [philosophiesOfGold, ominousMask, tailOfBoreas], [philosophiesOfGold, ominousMask, tailOfBoreas], [philosophiesOfGold, ominousMask, tailOfBoreas],
      [philosophiesOfGold, ominousMask, tailOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "guhua_sword_fatal_rainscreen",
    requirements: [
      [teachingsGold, damagedMask],
      [guideOfGold, stainedMask], [guideOfGold, stainedMask], [guideOfGold, stainedMask], [guideOfGold, stainedMask],
      [philosophiesOfGold, ominousMask, tailOfBoreas], [philosophiesOfGold, ominousMask, tailOfBoreas], [philosophiesOfGold, ominousMask, tailOfBoreas],
      [philosophiesOfGold, ominousMask, tailOfBoreas, crownOfSagehood],]
  },
  {
    name: "guhua_sword_raincutter",
    requirements: [
      [teachingsGold, damagedMask],
      [guideOfGold, stainedMask], [guideOfGold, stainedMask], [guideOfGold, stainedMask], [guideOfGold, stainedMask],
      [philosophiesOfGold, ominousMask, tailOfBoreas], [philosophiesOfGold, ominousMask, tailOfBoreas], [philosophiesOfGold, ominousMask, tailOfBoreas],
      [philosophiesOfGold, ominousMask, tailOfBoreas, crownOfSagehood],]
  }
]

export const getXingqiu = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...xingqiu,
    ...(withAscension ? { ascension: xingqiuAscension } : {}),
    ...(withTalents ? { talents: xingqiuTalents } : {})
  }
}

export default {
  id: 26,
  get: getXingqiu
}
