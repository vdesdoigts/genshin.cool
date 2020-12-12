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

export const getKlee = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...klee,
    ...(withAscension ? { ascension: kleeAscension } : {})
  }
}

export default {
  id: 12,
  get: getKlee
}
