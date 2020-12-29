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

import guideOfFreedom from '../materials/talents/freedom/guide-freedom'
import philosophiesOfFreedom from '../materials/talents/freedom/philosophies-freedom'
import teachingsFreedom from '../materials/talents/freedom/teachings-freedom'
import ringOfBoreas from '../materials/bosses/ring-of-boreas'
import crownOfSagehood from '../materials/events/crown-sagehood'

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
  description: "barbara.description",
}

export const barbaraAscension = [
  [varunadaLazuriteSliver, philanemoMushroom, diviningScroll],
  [varunadaLazuriteFragment, cleansingHeart, philanemoMushroom, diviningScroll],
  [varunadaLazuriteFragment, cleansingHeart, philanemoMushroom, sealedScroll],
  [varunadaLazuriteChunk, cleansingHeart, philanemoMushroom, sealedScroll],
  [varunadaLazuriteChunk, cleansingHeart, philanemoMushroom, forbiddenCurseScroll],
  [varunadaLazuriteGemstone, cleansingHeart, philanemoMushroom, forbiddenCurseScroll],
]

const barbaraTalents = [
  {
    name: "whisper_of_water",
    requirements: [
      [teachingsFreedom, diviningScroll],
      [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll],
      [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas], [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas], [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas],
      [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "let_the_show_begin",
    requirements: [
      [teachingsFreedom, diviningScroll],
      [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll],
      [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas], [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas], [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas],
      [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas, crownOfSagehood],]
  },
  {
    name: "shining_miracle",
    requirements: [
      [teachingsFreedom, diviningScroll],
      [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll],
      [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas], [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas], [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas],
      [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas, crownOfSagehood],]
  }
]

export const getBarbara = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...barbara,
    ...(withAscension ? { ascension: barbaraAscension } : {}),
    ...(withTalents ? { talents: barbaraTalents } : {})
  }
}

export default {
  id: 2,
  get: getBarbara
}
