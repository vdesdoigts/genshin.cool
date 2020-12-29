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

import guideOfDiligence from '../materials/talents/diligence/guide-diligence'
import philosophiesOfDiligence from '../materials/talents/diligence/philosophies-diligence'
import teachingsDiligence from '../materials/talents/diligence/teachings-diligence'
import dvalinsSigh from '../materials/bosses/dvalins-sigh'
import crownOfSagehood from '../materials/events/crown-sagehood'

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
  affiliation: null,
  description: "chongyung.description",
}

export const chongyunAscension = [
  [shivadaJadeSliver, corLapis, damagedMask],
  [shivadaJadeFragment, hoarfrostCore, corLapis, damagedMask],
  [shivadaJadeFragment, hoarfrostCore, corLapis, stainedMask],
  [shivadaJadeChunk, hoarfrostCore, corLapis, stainedMask],
  [shivadaJadeChunk, hoarfrostCore, corLapis, ominousMask],
  [shivadaJadeGemstone, hoarfrostCore, corLapis, ominousMask],
]

const chongyungTalents = [
  {
    name: "demonbane",
    requirements: [
      [teachingsDiligence, damagedMask],
      [guideOfDiligence, stainedMask], [guideOfDiligence, stainedMask], [guideOfDiligence, stainedMask], [guideOfDiligence, stainedMask],
      [philosophiesOfDiligence, ominousMask, dvalinsSigh], [philosophiesOfDiligence, ominousMask, dvalinsSigh], [philosophiesOfDiligence, ominousMask, dvalinsSigh],
      [philosophiesOfDiligence, ominousMask, dvalinsSigh, crownOfSagehood],
    ]
  },
  {
    name: "chonghua_s_layered_frost",
    requirements: [
      [teachingsDiligence, damagedMask],
      [guideOfDiligence, stainedMask], [guideOfDiligence, stainedMask], [guideOfDiligence, stainedMask], [guideOfDiligence, stainedMask],
      [philosophiesOfDiligence, ominousMask, dvalinsSigh], [philosophiesOfDiligence, ominousMask, dvalinsSigh], [philosophiesOfDiligence, ominousMask, dvalinsSigh],
      [philosophiesOfDiligence, ominousMask, dvalinsSigh, crownOfSagehood],]
  },
  {
    name: "cloud_parting_star",
    requirements: [
      [teachingsDiligence, damagedMask],
      [guideOfDiligence, stainedMask], [guideOfDiligence, stainedMask], [guideOfDiligence, stainedMask], [guideOfDiligence, stainedMask],
      [philosophiesOfDiligence, ominousMask, dvalinsSigh], [philosophiesOfDiligence, ominousMask, dvalinsSigh], [philosophiesOfDiligence, ominousMask, dvalinsSigh],
      [philosophiesOfDiligence, ominousMask, dvalinsSigh, crownOfSagehood],]
  }
]

export const getChongyun = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...chongyun,
    ...(withAscension ? { ascension: chongyunAscension } : {}),
    ...(withTalents ? { talents: chongyungTalents } : {})
  }
}

export default {
  id: 5,
  get: getChongyun
}
