import { IGetCharacterOptions } from './types'

import agnidusAgateChunk from '../materials/gems/agnidus-agate/agnidus-agate-chunk'
import agnidusAgateFragment from '../materials/gems/agnidus-agate/agnidus-agate-fragment'
import agnidusAgateGemstone from '../materials/gems/agnidus-agate/agnidus-agate-gemstone'
import agnidusAgateSliver from '../materials/gems/agnidus-agate/agnidus-agate-sliver'

import diviningScroll from '../materials/common/scroll/divining-scroll'
import forbiddenCurseScroll from '../materials/common/scroll/forbidden-curse-scroll'
import sealedScroll from '../materials/common/scroll/sealed-scroll'
import everflameSeed from '../materials/bosses/everflame-seed'
import philanemoMushroom from '../materials/wild/philanemo-mushroom'

import guideOfFreedom from '../materials/talents/freedom/guide-freedom'
import philosophiesOfFreedom from '../materials/talents/freedom/philosophies-freedom'
import teachingsFreedom from '../materials/talents/freedom/teachings-freedom'
import ringOfBoreas from '../materials/bosses/ring-of-boreas'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const klee = {
  name: "Klee",
  titles: [
    "fleeing_sunlight",
    "spark_knight"
  ],
  element: "pyro",
  weaponType: "catalyst",
  gender: "female",
  region: "mondstadt",
  rarity: 5,
  images: {
    image: "/images/characters/klee-thumb.png",
  },
  affiliation: "knights_of_favonius",
  description: "Knights of Favonius Spark Knight! Forever with a bang and a flash! —And then disappearing from the stern gaze of Acting Grand Master Jean. Sure, time in solitary confinement gives lots of time to think about new gunpowder formulas...But it'd still be better to not be in solitary in the first place.",
}

export const kleeAscension = [
  [agnidusAgateSliver, philanemoMushroom, diviningScroll],
  [agnidusAgateFragment, everflameSeed, philanemoMushroom, diviningScroll],
  [agnidusAgateFragment, everflameSeed, philanemoMushroom, sealedScroll],
  [agnidusAgateChunk, everflameSeed, philanemoMushroom, sealedScroll],
  [agnidusAgateChunk, everflameSeed, philanemoMushroom, forbiddenCurseScroll],
  [agnidusAgateGemstone, everflameSeed, philanemoMushroom, forbiddenCurseScroll],
]

const kleeTalents = [
  {
    name: "kaboom",
    requirements: [
      [teachingsFreedom, diviningScroll],
      [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll],
      [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas], [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas], [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas],
      [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "jumpy_dumpy",
    requirements: [
      [teachingsFreedom, diviningScroll],
      [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll],
      [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas], [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas], [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas],
      [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas, crownOfSagehood],]
  },
  {
    name: "sparks_n_splash",
    requirements: [
      [teachingsFreedom, diviningScroll],
      [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll], [guideOfFreedom, sealedScroll],
      [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas], [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas], [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas],
      [philosophiesOfFreedom, forbiddenCurseScroll, ringOfBoreas, crownOfSagehood],]
  }
]

export const getKlee = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...klee,
    ...(withAscension ? { ascension: kleeAscension } : {}),
    ...(withTalents ? { talents: kleeTalents } : {})
  }
}

export default {
  id: 12,
  get: getKlee
}
