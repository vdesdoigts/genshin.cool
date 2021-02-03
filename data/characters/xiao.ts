import { IGetCharacterOptions } from './types'

import vayudaTurquoiseChunk from '../materials/gems/vayuda-turquoise/vayuda-turquoise-chunk'
import vayudaTurquoiseFragment from '../materials/gems/vayuda-turquoise/vayuda-turquoise-fragment'
import vayudaTurquoiseGemstone from '../materials/gems/vayuda-turquoise/vayuda-turquoise-gemstone'
import vayudaTurquoiseSliver from '../materials/gems/vayuda-turquoise/vayuda-turquoise-sliver'

import slimeConcentrate from '../materials/common/slime/slime-concentrate'
import slimeCondensate from '../materials/common/slime/slime-condensate'
import slimeSecretions from '../materials/common/slime/slime-secretions'
import juvenileJade from '../materials/bosses/juvenile-jade'
import qingxin from '../materials/wild/qingxin'

import guideOfProsperity from '../materials/talents/prosperity/guide-prosperity'
import philosophiesOfProsperity from '../materials/talents/prosperity/philosophies-prosperity'
import teachingsProsperity from '../materials/talents/prosperity/teachings-prosperity'
import shadowOfTheWarrior from '../materials/bosses/shadow-of-the-warrior'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const xiao = {
  name: "Xiao",
  titles: [
    "conqueror_of_demons",
  ],
  element: "anemo",
  weaponType: "polearm",
  gender: "male",
  region: "liyue",
  rarity: 5,
  images: {
    image: "/images/characters/xiao-thumb.png",
  },
  affiliation: "liyue_adeptus",
  description: "xiao.description",
}

export const xiaoAscension = [
  [vayudaTurquoiseSliver, qingxin, slimeCondensate],
  [vayudaTurquoiseFragment, juvenileJade, qingxin, slimeCondensate],
  [vayudaTurquoiseFragment, juvenileJade, qingxin, slimeSecretions],
  [vayudaTurquoiseChunk, juvenileJade, qingxin, slimeSecretions],
  [vayudaTurquoiseChunk, juvenileJade, qingxin, slimeConcentrate],
  [vayudaTurquoiseGemstone, juvenileJade, qingxin, slimeConcentrate],
]

const xiaoTalents = [
  {
    name: "whirlwind_thrust",
    requirements: [
      [teachingsProsperity, slimeCondensate],
      [guideOfProsperity, slimeSecretions], [guideOfProsperity, slimeSecretions], [guideOfProsperity, slimeSecretions], [guideOfProsperity, slimeSecretions],
      [philosophiesOfProsperity, slimeConcentrate, shadowOfTheWarrior], [philosophiesOfProsperity, slimeConcentrate, shadowOfTheWarrior], [philosophiesOfProsperity, slimeConcentrate, shadowOfTheWarrior],
      [philosophiesOfProsperity, slimeConcentrate, shadowOfTheWarrior, crownOfSagehood],
    ]
  },
  {
    name: "lemniscatic_wind_cycling",
    requirements: [
      [teachingsProsperity, slimeCondensate],
      [guideOfProsperity, slimeSecretions], [guideOfProsperity, slimeSecretions], [guideOfProsperity, slimeSecretions], [guideOfProsperity, slimeSecretions],
      [philosophiesOfProsperity, slimeConcentrate, shadowOfTheWarrior], [philosophiesOfProsperity, slimeConcentrate, shadowOfTheWarrior], [philosophiesOfProsperity, slimeConcentrate, shadowOfTheWarrior],
      [philosophiesOfProsperity, slimeConcentrate, shadowOfTheWarrior, crownOfSagehood],]
  },
  {
    name: "bane_of_all_evil",
    requirements: [
      [teachingsProsperity, slimeCondensate],
      [guideOfProsperity, slimeSecretions], [guideOfProsperity, slimeSecretions], [guideOfProsperity, slimeSecretions], [guideOfProsperity, slimeSecretions],
      [philosophiesOfProsperity, slimeConcentrate, shadowOfTheWarrior], [philosophiesOfProsperity, slimeConcentrate, shadowOfTheWarrior], [philosophiesOfProsperity, slimeConcentrate, shadowOfTheWarrior],
      [philosophiesOfProsperity, slimeConcentrate, shadowOfTheWarrior, crownOfSagehood],]
  }
]

export const getXiao = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...xiao,
    ...(withAscension ? { ascension: xiaoAscension } : {}),
    ...(withTalents ? { talents: xiaoTalents } : {})
  }
}

export default {
  id: 30,
  get: getXiao
}
