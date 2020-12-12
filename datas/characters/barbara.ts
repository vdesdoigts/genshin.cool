import { IGetCharacterOptions } from './types'

import varunadaLazuriteChunk from '../materials/gems/varunada-lazurite/varunada-lazurite-chunk'
import varunadaLazuriteFragment from '../materials/gems/varunada-lazurite/varunada-lazurite-fragment'
import varunadaLazuriteGemstone from '../materials/gems/varunada-lazurite/varunada-lazurite-gemstone'
import varunadaLazuriteSliver from '../materials/gems/varunada-lazurite/varunada-lazurite-sliver'

import diviningScroll from '../materials/common/scroll/divining-scroll'
import forbiddenCurseScroll from '../materials/common/scroll/forbidden-curse-scroll'
import sealedScroll from '../materials/common/scroll/sealed-scroll'
import cleansingHeart from '../materials/bosses/cleansing-heart'
import philanemoMushroom from '../materials/wild/philanemo-mushroom'

export const barbara = {
  id: 2,
  name: "Barbara",
  titles: [
    "shining_idol",
    "deaconess"
  ],
  element: "hydro",
  weaponType: "catalyst",
  gender: "female",
  region: "mondstadt",
  rarity: 4,
  images: {
    image: "/images/characters/barbara-thumb.png",
  },
  affiliation: "favonius_church",
  description: "The Deaconess of the Favonius Church and a shining starlet adored by all. Although the concept of a starlet is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless. 'I owe everything to the city's spirit of freedom'",
}

export const barbaraAscension = [
  [varunadaLazuriteSliver, philanemoMushroom, diviningScroll],
  [varunadaLazuriteFragment, cleansingHeart, philanemoMushroom, diviningScroll],
  [varunadaLazuriteFragment, cleansingHeart, philanemoMushroom, sealedScroll],
  [varunadaLazuriteChunk, cleansingHeart, philanemoMushroom, sealedScroll],
  [varunadaLazuriteChunk, cleansingHeart, philanemoMushroom, forbiddenCurseScroll],
  [varunadaLazuriteGemstone, cleansingHeart, philanemoMushroom, forbiddenCurseScroll],
]

export const getBarbara = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...barbara,
    ...(withAscension ? { ascension: barbaraAscension } : {})
  }
}

export default {
  id: 2,
  get: getBarbara
}
