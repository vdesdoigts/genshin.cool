import { IGetCharacterOptions } from './types'

import agnidusAgateChunk from '../materials/gems/agnidus-agate/agnidus-agate-chunk'
import agnidusAgateFragment from '../materials/gems/agnidus-agate/agnidus-agate-fragment'
import agnidusAgateGemstone from '../materials/gems/agnidus-agate/agnidus-agate-gemstone'
import agnidusAgateSliver from '../materials/gems/agnidus-agate/agnidus-agate-sliver'

import lieutenantsInsignia from '../materials/common/soldier-insignia/lieutenants-insignia'
import recruitsInsignia from '../materials/common/soldier-insignia/recruits-insignia'
import sergeantsInsignia from '../materials/common/soldier-insignia/sergeants-insignia'
import everflameSeed from '../materials/bosses/everflame-seed'
import smallLampGrass from '../materials/wild/small-lamp-grass'

export const diluc = {
  name: "Diluc",
  titles: [
    "dark_side_of_dawn"
  ],
  element: "pyro",
  weaponType: "claymore",
  gender: "male",
  region: "mondstadt",
  rarity: 5,
  images: {
    image: "/images/characters/diluc-thumb.png",
  },
  affiliation: "n/a",
  description: "As the wealthiest gentleman in Mondstadt, the ever-dapper Diluc always presents himself as the epitome of perfection. But behind the courteous visage burns a zealous soul that has sworn to protect Mondstadt at all costs, allowing him to mercilessly vanquish all who threaten his city.",
}

export const dilucAscension = [
  [agnidusAgateSliver, smallLampGrass, recruitsInsignia],
  [agnidusAgateFragment, everflameSeed, smallLampGrass, recruitsInsignia],
  [agnidusAgateFragment, everflameSeed, smallLampGrass, sergeantsInsignia],
  [agnidusAgateChunk, everflameSeed, smallLampGrass, sergeantsInsignia],
  [agnidusAgateChunk, everflameSeed, smallLampGrass, lieutenantsInsignia],
  [agnidusAgateGemstone, everflameSeed, smallLampGrass, lieutenantsInsignia],
]

export const getDiluc = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...diluc,
    ...(withAscension ? { ascension: dilucAscension } : {})
  }
}

export default {
  id: 6,
  get: getDiluc
}
