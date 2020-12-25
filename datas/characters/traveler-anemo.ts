import { IGetCharacterOptions } from './types'

import brilliantDiamondChunk from '../materials/gems/brilliant-diamond/brilliant-diamond-chunk'
import brilliantDiamondFragment from '../materials/gems/brilliant-diamond/brilliant-diamond-fragment'
import brilliantDiamondGemstone from '../materials/gems/brilliant-diamond/brilliant-diamond-gemstone'
import brilliantDiamondSliver from '../materials/gems/brilliant-diamond/brilliant-diamond-sliver'

import damagedMask from '../materials/common/mask/damaged-mask'
import ominousMask from '../materials/common/mask/ominous-mask'
import stainedMask from '../materials/common/mask/stained-mask'
import windwheelAster from '../materials/wild/windwheel-aster'

import diviningScroll from '../materials/common/scroll/divining-scroll'
import forbiddenCurseScroll from '../materials/common/scroll/forbidden-curse-scroll'
import sealedScroll from '../materials/common/scroll/sealed-scroll'

import guideOfResistance from '../materials/talents/resistance/guide-resistance'
import philosophiesOfBallad from '../materials/talents/ballad/philosophies-ballad'
import teachingsFreedom from '../materials/talents/freedom/teachings-freedom'
import dvalinsSigh from '../materials/bosses/dvalins-sigh'
import crownOfSagehood from '../materials/events/crown-sagehood'

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

const travelerAnemoTalents = [
  {
    name: "foreign_ironwind",
    requirements: [
      [teachingsFreedom, diviningScroll],
      [guideOfResistance, sealedScroll], [guideOfResistance, sealedScroll], [guideOfResistance, sealedScroll], [guideOfResistance, sealedScroll],
      [philosophiesOfBallad, forbiddenCurseScroll, dvalinsSigh], [philosophiesOfBallad, forbiddenCurseScroll, dvalinsSigh], [philosophiesOfBallad, forbiddenCurseScroll, dvalinsSigh],
      [philosophiesOfBallad, forbiddenCurseScroll, dvalinsSigh, crownOfSagehood],
    ]
  },
  {
    name: "palm_vortex",
    requirements: [
      [teachingsFreedom, diviningScroll],
      [guideOfResistance, sealedScroll], [guideOfResistance, sealedScroll], [guideOfResistance, sealedScroll], [guideOfResistance, sealedScroll],
      [philosophiesOfBallad, forbiddenCurseScroll, dvalinsSigh], [philosophiesOfBallad, forbiddenCurseScroll, dvalinsSigh], [philosophiesOfBallad, forbiddenCurseScroll, dvalinsSigh],
      [philosophiesOfBallad, forbiddenCurseScroll, dvalinsSigh, crownOfSagehood],]
  },
  {
    name: "gust_surge",
    requirements: [
      [teachingsFreedom, diviningScroll],
      [guideOfResistance, sealedScroll], [guideOfResistance, sealedScroll], [guideOfResistance, sealedScroll], [guideOfResistance, sealedScroll],
      [philosophiesOfBallad, forbiddenCurseScroll, dvalinsSigh], [philosophiesOfBallad, forbiddenCurseScroll, dvalinsSigh], [philosophiesOfBallad, forbiddenCurseScroll, dvalinsSigh],
      [philosophiesOfBallad, forbiddenCurseScroll, dvalinsSigh, crownOfSagehood],]
  }
]

export const getTravelerAnemo = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...travelerAnemo,
    ...(withAscension ? { ascension: travelerAnemoAscension } : {}),
    ...(withTalents ? { talents: travelerAnemoTalents } : {})
  }
}

export default {
  id: 21,
  get: getTravelerAnemo
}
