import { IGetCharacterOptions } from './types'

import agnidusAgateChunk from '../materials/gems/agnidus-agate/agnidus-agate-chunk'
import agnidusAgateFragment from '../materials/gems/agnidus-agate/agnidus-agate-fragment'
import agnidusAgateGemstone from '../materials/gems/agnidus-agate/agnidus-agate-gemstone'
import agnidusAgateSliver from '../materials/gems/agnidus-agate/agnidus-agate-sliver'

import slimeConcentrate from '../materials/common/slime/slime-concentrate'
import slimeCondensate from '../materials/common/slime/slime-condensate'
import slimeSecretions from '../materials/common/slime/slime-secretions'
import everflameSeed from '../materials/bosses/everflame-seed'
import jueyunChili from '../materials/wild/jueyun-chili'

import guideOfDiligence from '../materials/talents/diligence/guide-diligence'
import philosophiesOfDiligence from '../materials/talents/diligence/philosophies-diligence'
import teachingsDiligence from '../materials/talents/diligence/teachings-diligence'
import dvalinsClaw from '../materials/bosses/dvalins-claw'
import crownOfSagehood from '../materials/events/crown-sagehood'

const xiangling = {
  name: "Xiangling",
  titles: [
    "exquisite_delicacy",
    "chef_de_cuisine"
  ],
  element: "pyro",
  weaponType: "polearm",
  gender: "female",
  region: "liyue",
  rarity: 4,
  images: {
    image: "/images/characters/xiangling-thumb.png",
  },
  affiliation: "wanmin_restaurant",
  description: "The Head Chef at the Wanmin Restaurant and also a waitress there, Xiangling is extremely passionate about cooking and excels at her signature hot and spicy dishes. Though still young, Xiangling is a true master of the culinary arts with all the skills of a kitchen veteran. She enjoys a good reputation among the hearty eaters at Chihu Rock. There's absolutely no need to be nervous if she wants you to sample her latest creation. It will not disappoint. Promise.",
}

export const xianglingAscension = [
  [agnidusAgateSliver, jueyunChili, slimeCondensate],
  [agnidusAgateFragment, everflameSeed, jueyunChili, slimeCondensate],
  [agnidusAgateFragment, everflameSeed, jueyunChili, slimeSecretions],
  [agnidusAgateChunk, everflameSeed, jueyunChili, slimeSecretions],
  [agnidusAgateChunk, everflameSeed, jueyunChili, slimeConcentrate],
  [agnidusAgateGemstone, everflameSeed, jueyunChili, slimeConcentrate],
]

const xianglingTalents = [
  {
    name: "dough_fu",
    requirements: [
      [teachingsDiligence, slimeCondensate],
      [guideOfDiligence, slimeSecretions], [guideOfDiligence, slimeSecretions], [guideOfDiligence, slimeSecretions], [guideOfDiligence, slimeSecretions],
      [philosophiesOfDiligence, slimeConcentrate, dvalinsClaw], [philosophiesOfDiligence, slimeConcentrate, dvalinsClaw], [philosophiesOfDiligence, slimeConcentrate, dvalinsClaw],
      [philosophiesOfDiligence, slimeConcentrate, dvalinsClaw, crownOfSagehood],
    ]
  },
  {
    name: "guoba_attack",
    requirements: [
      [teachingsDiligence, slimeCondensate],
      [guideOfDiligence, slimeSecretions], [guideOfDiligence, slimeSecretions], [guideOfDiligence, slimeSecretions], [guideOfDiligence, slimeSecretions],
      [philosophiesOfDiligence, slimeConcentrate, dvalinsClaw], [philosophiesOfDiligence, slimeConcentrate, dvalinsClaw], [philosophiesOfDiligence, slimeConcentrate, dvalinsClaw],
      [philosophiesOfDiligence, slimeConcentrate, dvalinsClaw, crownOfSagehood],]
  },
  {
    name: "pyronado",
    requirements: [
      [teachingsDiligence, slimeCondensate],
      [guideOfDiligence, slimeSecretions], [guideOfDiligence, slimeSecretions], [guideOfDiligence, slimeSecretions], [guideOfDiligence, slimeSecretions],
      [philosophiesOfDiligence, slimeConcentrate, dvalinsClaw], [philosophiesOfDiligence, slimeConcentrate, dvalinsClaw], [philosophiesOfDiligence, slimeConcentrate, dvalinsClaw],
      [philosophiesOfDiligence, slimeConcentrate, dvalinsClaw, crownOfSagehood],]
  }
]

export const getXiangling = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...xiangling,
    ...(withAscension ? { ascension: xianglingAscension } : {}),
    ...(withTalents ? { talents: xianglingTalents } : {})
  }
}

export default {
  id: 24,
  get: getXiangling
}
