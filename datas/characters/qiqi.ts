import { IGetCharacterOptions } from './types'

import shivadaJadeChunk from '../materials/gems/shivada-jade/shivada-jade-chunk'
import shivadaJadeFragment from '../materials/gems/shivada-jade/shivada-jade-fragment'
import shivadaJadeGemstone from '../materials/gems/shivada-jade/shivada-jade-gemstone'
import shivadaJadeSliver from '../materials/gems/shivada-jade/shivada-jade-sliver'

import diviningScroll from '../materials/common/scroll/divining-scroll'
import forbiddenCurseScroll from '../materials/common/scroll/forbidden-curse-scroll'
import sealedScroll from '../materials/common/scroll/sealed-scroll'
import hoarfrostCore from '../materials/bosses/hoarfrost-core'
import violetgrass from '../materials/wild/violetgrass'

export const qiqi = {
  name: "Qiqi",
  titles: [
    "pharmacist",
    "icy_resurrection"
  ],
  element: "cryo",
  weaponType: "sword",
  gender: "female",
  region: "liyue",
  rarity: 5,
  images: {
    image: "/images/characters/qiqi-thumb.png",
  },
  affiliation: "bubu_pharmacy",
  description: "An apprentice and herb gatherer at Bubu Pharmacy. 'Blessed' by the adepti with a body that cannot die, this petite zombie cannot do anything without first giving herself orders to do it. Qiqi's memory is like a sieve. Out of necessity, she always carries around a notebook in which she writes anything important that she is sure to forget later. But on her worst days, she even forgets to look at her notebook...",
}

export const qiqiAscension = [
  [shivadaJadeSliver, violetgrass, diviningScroll],
  [shivadaJadeFragment, hoarfrostCore, violetgrass, diviningScroll],
  [shivadaJadeFragment, hoarfrostCore, violetgrass, sealedScroll],
  [shivadaJadeChunk, hoarfrostCore, violetgrass, sealedScroll],
  [shivadaJadeChunk, hoarfrostCore, violetgrass, forbiddenCurseScroll],
  [shivadaJadeGemstone, hoarfrostCore, violetgrass, forbiddenCurseScroll],
]

export const getQiqi = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...qiqi,
    ...(withAscension ? { ascension: qiqiAscension } : {})
  }
}

export default {
  id: 17,
  get: getQiqi
}
