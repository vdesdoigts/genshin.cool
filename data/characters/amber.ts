import { IGetCharacterOptions } from './types'

import agnidusAgateChunk from '../materials/gems/agnidus-agate/agnidus-agate-chunk'
import agnidusAgateFragment from '../materials/gems/agnidus-agate/agnidus-agate-fragment'
import agnidusAgateGemstone from '../materials/gems/agnidus-agate/agnidus-agate-gemstone'
import agnidusAgateSliver from '../materials/gems/agnidus-agate/agnidus-agate-sliver'

import firmArrowhead from '../materials/common/arrow/firm-arrowhead'
import sharpArrowhead from '../materials/common/arrow/sharp-arrowhead'
import weatheredArrowhead from '../materials/common/arrow/weathered-arrowhead'
import everflameSeed from '../materials/bosses/everflame-seed'
import smallLampGrass from '../materials/wild/small-lamp-grass'

import guideOfFreedom from '../materials/talents/freedom/guide-freedom'
import philosophiesOfFreedom from '../materials/talents/freedom/philosophies-freedom'
import teachingsFreedom from '../materials/talents/freedom/teachings-freedom'
import dvalinsSigh from '../materials/bosses/dvalins-sigh'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const amber = {
  name: "Amber",
  titles: [
    "outrider",
    "champion_glider"
  ],
  element: "pyro",
  weaponType: "bow",
  gender: "female",
  region: "mondstadt",
  rarity: 4,
  images: {
    image: "/images/characters/amber-thumb.png",
  },
  affiliation: "knights_of_favonius",
  description: "amber.description",
}

export const amberAscension = [
  [agnidusAgateSliver, smallLampGrass, firmArrowhead],
  [agnidusAgateFragment, everflameSeed, smallLampGrass, firmArrowhead],
  [agnidusAgateFragment, everflameSeed, smallLampGrass, sharpArrowhead],
  [agnidusAgateChunk, everflameSeed, smallLampGrass, sharpArrowhead],
  [agnidusAgateChunk, everflameSeed, smallLampGrass, weatheredArrowhead],
  [agnidusAgateGemstone, everflameSeed, smallLampGrass, weatheredArrowhead],
]

const amberTalents = [
  {
    name: "sharpshooter",
    requirements: [
      [teachingsFreedom, firmArrowhead],
      [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead],
      [philosophiesOfFreedom, weatheredArrowhead, dvalinsSigh], [philosophiesOfFreedom, weatheredArrowhead, dvalinsSigh], [philosophiesOfFreedom, weatheredArrowhead, dvalinsSigh],
      [philosophiesOfFreedom, weatheredArrowhead, dvalinsSigh, crownOfSagehood],
    ]
  },
  {
    name: "explosive_puppet",
    requirements: [
      [teachingsFreedom, firmArrowhead],
      [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead],
      [philosophiesOfFreedom, weatheredArrowhead, dvalinsSigh], [philosophiesOfFreedom, weatheredArrowhead, dvalinsSigh], [philosophiesOfFreedom, weatheredArrowhead, dvalinsSigh],
      [philosophiesOfFreedom, weatheredArrowhead, dvalinsSigh, crownOfSagehood],]
  },
  {
    name: "fiery_rain",
    requirements: [
      [teachingsFreedom, firmArrowhead],
      [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead],
      [philosophiesOfFreedom, weatheredArrowhead, dvalinsSigh], [philosophiesOfFreedom, weatheredArrowhead, dvalinsSigh], [philosophiesOfFreedom, weatheredArrowhead, dvalinsSigh],
      [philosophiesOfFreedom, weatheredArrowhead, dvalinsSigh, crownOfSagehood],]
  }
]

export const getAmber = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...amber,
    ...(withAscension ? { ascension: amberAscension } : {}),
    ...(withTalents ? { talents: amberTalents } : {})
  }
}

export default {
  id: 1,
  get: getAmber
}
