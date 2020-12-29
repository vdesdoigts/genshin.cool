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

import guideOfProsperity from '../materials/talents/prosperity/guide-prosperity'
import philosophiesOfProsperity from '../materials/talents/prosperity/philosophies-prosperity'
import teachingsProsperity from '../materials/talents/prosperity/teachings-prosperity'
import tailOfBoreas from '../materials/bosses/tail-of-boreas'
import crownOfSagehood from '../materials/events/crown-sagehood'

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
  description: "qiqi.description",
}

export const qiqiAscension = [
  [shivadaJadeSliver, violetgrass, diviningScroll],
  [shivadaJadeFragment, hoarfrostCore, violetgrass, diviningScroll],
  [shivadaJadeFragment, hoarfrostCore, violetgrass, sealedScroll],
  [shivadaJadeChunk, hoarfrostCore, violetgrass, sealedScroll],
  [shivadaJadeChunk, hoarfrostCore, violetgrass, forbiddenCurseScroll],
  [shivadaJadeGemstone, hoarfrostCore, violetgrass, forbiddenCurseScroll],
]

const qiqiTalents = [
  {
    name: "sparkling_scatter",
    requirements: [
      [teachingsProsperity, diviningScroll],
      [guideOfProsperity, sealedScroll], [guideOfProsperity, sealedScroll], [guideOfProsperity, sealedScroll], [guideOfProsperity, sealedScroll],
      [philosophiesOfProsperity, forbiddenCurseScroll, tailOfBoreas], [philosophiesOfProsperity, forbiddenCurseScroll, tailOfBoreas], [philosophiesOfProsperity, forbiddenCurseScroll, tailOfBoreas],
      [philosophiesOfProsperity, forbiddenCurseScroll, tailOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "jade_screen",
    requirements: [
      [teachingsProsperity, diviningScroll],
      [guideOfProsperity, sealedScroll], [guideOfProsperity, sealedScroll], [guideOfProsperity, sealedScroll], [guideOfProsperity, sealedScroll],
      [philosophiesOfProsperity, forbiddenCurseScroll, tailOfBoreas], [philosophiesOfProsperity, forbiddenCurseScroll, tailOfBoreas], [philosophiesOfProsperity, forbiddenCurseScroll, tailOfBoreas],
      [philosophiesOfProsperity, forbiddenCurseScroll, tailOfBoreas, crownOfSagehood],]
  },
  {
    name: "starshatter",
    requirements: [
      [teachingsProsperity, diviningScroll],
      [guideOfProsperity, sealedScroll], [guideOfProsperity, sealedScroll], [guideOfProsperity, sealedScroll], [guideOfProsperity, sealedScroll],
      [philosophiesOfProsperity, forbiddenCurseScroll, tailOfBoreas], [philosophiesOfProsperity, forbiddenCurseScroll, tailOfBoreas], [philosophiesOfProsperity, forbiddenCurseScroll, tailOfBoreas],
      [philosophiesOfProsperity, forbiddenCurseScroll, tailOfBoreas, crownOfSagehood],]
  }
]

export const getQiqi = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...qiqi,
    ...(withAscension ? { ascension: qiqiAscension } : {}),
    ...(withTalents ? { talents: qiqiTalents } : {})
  }
}

export default {
  id: 17,
  get: getQiqi
}
