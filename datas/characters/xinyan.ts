import { IGetCharacterOptions } from './types'

import agnidusAgateChunk from '../materials/gems/agnidus-agate/agnidus-agate-chunk'
import agnidusAgateFragment from '../materials/gems/agnidus-agate/agnidus-agate-fragment'
import agnidusAgateGemstone from '../materials/gems/agnidus-agate/agnidus-agate-gemstone'
import agnidusAgateSliver from '../materials/gems/agnidus-agate/agnidus-agate-sliver'

import goldenRavenInsignia from '../materials/common/treasure-insignia/golden-raven-insignia'
import silverRavenInsignia from '../materials/common/treasure-insignia/silver-raven-insignia'
import treasureHoarderInsignia from '../materials/common/treasure-insignia/treasure-hoarder-insignia'
import everflameSeed from '../materials/bosses/everflame-seed'
import violetgrass from '../materials/wild/violetgrass'

export const xinyan = {
  name: "Xinyan",
  titles: [
    "blazing_riff"
  ],
  element: "pyro",
  weaponType: "claymore",
  gender: "female",
  region: "liyue",
  rarity: 4,
  images: {
    image: "/images/characters/xinyan-thumb.png",
  },
  affiliation: "n/a",
  description: "Rock 'n' roll is an avant-garde art in Liyue Harbor and Xinyan is the pioneer in this field. She rebels against ossified prejudices, using her music and passionate singing to awaken dazed souls fatigued by worldly matters. If you get the chance, do not miss out on her next performance!",
}

export const xinyanAscension = [
  [agnidusAgateSliver, violetgrass, treasureHoarderInsignia],
  [agnidusAgateFragment, everflameSeed, violetgrass, treasureHoarderInsignia],
  [agnidusAgateFragment, everflameSeed, violetgrass, silverRavenInsignia],
  [agnidusAgateChunk, everflameSeed, violetgrass, silverRavenInsignia],
  [agnidusAgateChunk, everflameSeed, violetgrass, goldenRavenInsignia],
  [agnidusAgateGemstone, everflameSeed, violetgrass, goldenRavenInsignia],
]

export const getAmber = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...xinyan,
    ...(withAscension ? { ascension: xinyanAscension } : {})
  }
}

export default {
  id: 28,
  get: getAmber
}
