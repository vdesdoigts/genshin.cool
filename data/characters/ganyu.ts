import { IGetCharacterOptions } from './types'

import shivadaJadeChunk from '../materials/gems/shivada-jade/shivada-jade-chunk'
import shivadaJadeFragment from '../materials/gems/shivada-jade/shivada-jade-fragment'
import shivadaJadeGemstone from '../materials/gems/shivada-jade/shivada-jade-gemstone'
import shivadaJadeSliver from '../materials/gems/shivada-jade/shivada-jade-sliver'

import energyNectar from '../materials/common/nectar/energy-nectar'
import shimmeringNectar from '../materials/common/nectar/shimmering-nectar'
import whopperflowerNectar from '../materials/common/nectar/whopperflower-nectar'
import hoarfrostCore from '../materials/bosses/hoarfrost-core'
import qingxin from '../materials/wild/qingxin'

import guideOfDiligence from '../materials/talents/diligence/guide-diligence'
import philosophiesOfDiligence from '../materials/talents/diligence/philosophies-diligence'
import teachingsDiligence from '../materials/talents/diligence/teachings-diligence'
import shadowOfTheWarrior from '../materials/bosses/shadow-of-the-warrior'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const ganyu = {
  name: "Ganyu",
  titles: [
    "plenilune_gaze",
  ],
  element: "cryo",
  weaponType: "bow",
  gender: "female",
  region: "liyue",
  rarity: 5,
  images: {
    image: "/images/characters/ganyu-thumb.png",
  },
  affiliation: "yuehai_pavilion",
  description: "ganyu.description",
}

export const ganyuAscension = [
  [shivadaJadeSliver, qingxin, whopperflowerNectar],
  [shivadaJadeFragment, hoarfrostCore, qingxin, whopperflowerNectar],
  [shivadaJadeFragment, hoarfrostCore, qingxin, shimmeringNectar],
  [shivadaJadeChunk, hoarfrostCore, qingxin, shimmeringNectar],
  [shivadaJadeChunk, hoarfrostCore, qingxin, energyNectar],
  [shivadaJadeGemstone, hoarfrostCore, qingxin, energyNectar],
]

const ganyuTalents = [
  {
    name: "liutian_archery",
    requirements: [
      [teachingsDiligence, whopperflowerNectar],
      [guideOfDiligence, shimmeringNectar], [guideOfDiligence, shimmeringNectar], [guideOfDiligence, shimmeringNectar], [guideOfDiligence, shimmeringNectar],
      [philosophiesOfDiligence, energyNectar, shadowOfTheWarrior], [philosophiesOfDiligence, energyNectar, shadowOfTheWarrior], [philosophiesOfDiligence, energyNectar, shadowOfTheWarrior],
      [philosophiesOfDiligence, energyNectar, shadowOfTheWarrior, crownOfSagehood],
    ]
  },
  {
    name: "trail_of_the_qilin",
    requirements: [
      [teachingsDiligence, whopperflowerNectar],
      [guideOfDiligence, shimmeringNectar], [guideOfDiligence, shimmeringNectar], [guideOfDiligence, shimmeringNectar], [guideOfDiligence, shimmeringNectar],
      [philosophiesOfDiligence, energyNectar, shadowOfTheWarrior], [philosophiesOfDiligence, energyNectar, shadowOfTheWarrior], [philosophiesOfDiligence, energyNectar, shadowOfTheWarrior],
      [philosophiesOfDiligence, energyNectar, shadowOfTheWarrior, crownOfSagehood],]
  },
  {
    name: "celestial_shower",
    requirements: [
      [teachingsDiligence, whopperflowerNectar],
      [guideOfDiligence, shimmeringNectar], [guideOfDiligence, shimmeringNectar], [guideOfDiligence, shimmeringNectar], [guideOfDiligence, shimmeringNectar],
      [philosophiesOfDiligence, energyNectar, shadowOfTheWarrior], [philosophiesOfDiligence, energyNectar, shadowOfTheWarrior], [philosophiesOfDiligence, energyNectar, shadowOfTheWarrior],
      [philosophiesOfDiligence, energyNectar, shadowOfTheWarrior, crownOfSagehood],]
  }
]

export const getGanyu = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...ganyu,
    ...(withAscension ? { ascension: ganyuAscension } : {}),
    ...(withTalents ? { talents: ganyuTalents } : {})
  }
}

export default {
  id: 29,
  get: getGanyu
}
