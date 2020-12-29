import { IGetCharacterOptions } from './types'

import brilliantDiamondChunk from '../materials/gems/brilliant-diamond/brilliant-diamond-chunk'
import brilliantDiamondFragment from '../materials/gems/brilliant-diamond/brilliant-diamond-fragment'
import brilliantDiamondGemstone from '../materials/gems/brilliant-diamond/brilliant-diamond-gemstone'
import brilliantDiamondSliver from '../materials/gems/brilliant-diamond/brilliant-diamond-sliver'

import diviningScroll from '../materials/common/scroll/divining-scroll'
import forbiddenCurseScroll from '../materials/common/scroll/forbidden-curse-scroll'
import sealedScroll from '../materials/common/scroll/sealed-scroll'
import firmArrowhead from '../materials/common/arrow/firm-arrowhead'
import sharpArrowhead from '../materials/common/arrow/sharp-arrowhead'
import weatheredArrowhead from '../materials/common/arrow/weathered-arrowhead'

import damagedMask from '../materials/common/mask/damaged-mask'
import ominousMask from '../materials/common/mask/ominous-mask'
import stainedMask from '../materials/common/mask/stained-mask'
import windwheelAster from '../materials/wild/windwheel-aster'

import guideOfResistance from '../materials/talents/resistance/guide-resistance'
import philosophiesOfBallad from '../materials/talents/ballad/philosophies-ballad'
import teachingsFreedom from '../materials/talents/freedom/teachings-freedom'
import dvalinsSigh from '../materials/bosses/dvalins-sigh'
import tailOfBoreas from '../materials/bosses/tail-of-boreas'
import crownOfSagehood from '../materials/events/crown-sagehood'

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
  },
  affiliation: "neutral",
  description: "traveler_geo.description",
}

export const travelerGeoAscension = [
  [brilliantDiamondSliver, windwheelAster, damagedMask],
  [brilliantDiamondFragment, null, windwheelAster, damagedMask],
  [brilliantDiamondFragment, null, windwheelAster, stainedMask],
  [brilliantDiamondChunk, null, windwheelAster, stainedMask],
  [brilliantDiamondChunk, null, windwheelAster, ominousMask],
  [brilliantDiamondGemstone, null, windwheelAster, ominousMask],
]

const travelerGeoTalents = [
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
      [teachingsFreedom, firmArrowhead],
      [guideOfResistance, sharpArrowhead], [guideOfResistance, sharpArrowhead], [guideOfResistance, sharpArrowhead], [guideOfResistance, sharpArrowhead],
      [philosophiesOfBallad, weatheredArrowhead, tailOfBoreas], [philosophiesOfBallad, weatheredArrowhead, tailOfBoreas], [philosophiesOfBallad, weatheredArrowhead, tailOfBoreas],
      [philosophiesOfBallad, weatheredArrowhead, tailOfBoreas, crownOfSagehood],]
  },
  {
    name: "gust_surge",
    requirements: [
      [teachingsFreedom, firmArrowhead],
      [guideOfResistance, sharpArrowhead], [guideOfResistance, sharpArrowhead], [guideOfResistance, sharpArrowhead], [guideOfResistance, sharpArrowhead],
      [philosophiesOfBallad, weatheredArrowhead, tailOfBoreas], [philosophiesOfBallad, weatheredArrowhead, tailOfBoreas], [philosophiesOfBallad, weatheredArrowhead, tailOfBoreas],
      [philosophiesOfBallad, weatheredArrowhead, tailOfBoreas, crownOfSagehood],]
  }
]

export const getTravelerGeo = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...travelerGeo,
    ...(withAscension ? { ascension: travelerGeoAscension } : {}),
    ...(withTalents ? { talents: travelerGeoTalents } : {})
  }
}

export default {
  id: 22,
  get: getTravelerGeo
}
