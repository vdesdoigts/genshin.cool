import { IGetCharacterOptions } from './types'

import agnidusAgateChunk from '../materials/agnidus-agate/agnidus-agate-chunk'
import agnidusAgateFragment from '../materials/agnidus-agate//agnidus-agate-fragment'
import agnidusAgateGemstone from '../materials/agnidus-agate/agnidus-agate-gemstone'
import agnidusAgateSliver from '../materials/agnidus-agate/agnidus-agate-sliver'

import firmArrowhead from '../materials/common/arrow/firm-arrowhead'
import sharpArrowhead from '../materials/common/arrow/sharp-arrowhead'
import weatheredArrowhead from '../materials/common/arrow/weathered-arrowhead'
import everflameSeed from '../materials/everflame-seed'
import smallLampGrass from '../materials/wild/small-lamp-grass'

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
  description: "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Championship in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
}

export const amberAscension = [
  [agnidusAgateSliver, smallLampGrass, firmArrowhead],
  [agnidusAgateFragment, everflameSeed, smallLampGrass, firmArrowhead],
  [agnidusAgateFragment, everflameSeed, smallLampGrass, sharpArrowhead],
  [agnidusAgateChunk, everflameSeed, smallLampGrass, sharpArrowhead],
  [agnidusAgateChunk, everflameSeed, smallLampGrass, weatheredArrowhead],
  [agnidusAgateGemstone, everflameSeed, smallLampGrass, weatheredArrowhead],
]

export const getAmber = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...amber,
    ...(withAscension ? { ascension: amberAscension } : {})
  }
}

export default {
  id: 1,
  get: getAmber
}
