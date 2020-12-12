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

export const getXingqiu = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...xingqiu,
    ...(withAscension ? { ascension: xingqiuAscension } : {})
  }
}

export default {
  id: 26,
  get: getXingqiu
}
