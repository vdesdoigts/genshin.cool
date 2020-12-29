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

import guideOfResistance from '../materials/talents/resistance/guide-resistance'
import philosophiesOfResistance from '../materials/talents/resistance/philosophies-resistance'
import teachingsResistance from '../materials/talents/resistance/teachings-resistance'
import dvalinsPlume from '../materials/bosses/dvalins-plume'
import crownOfSagehood from '../materials/events/crown-sagehood'

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
  affiliation: null,
  description: "diluc.description",
}

export const dilucAscension = [
  [agnidusAgateSliver, smallLampGrass, recruitsInsignia],
  [agnidusAgateFragment, everflameSeed, smallLampGrass, recruitsInsignia],
  [agnidusAgateFragment, everflameSeed, smallLampGrass, sergeantsInsignia],
  [agnidusAgateChunk, everflameSeed, smallLampGrass, sergeantsInsignia],
  [agnidusAgateChunk, everflameSeed, smallLampGrass, lieutenantsInsignia],
  [agnidusAgateGemstone, everflameSeed, smallLampGrass, lieutenantsInsignia],
]

const dilucTalents = [
  {
    name: "tempered_sword",
    requirements: [
      [teachingsResistance, recruitsInsignia],
      [guideOfResistance, sergeantsInsignia], [guideOfResistance, sergeantsInsignia], [guideOfResistance, sergeantsInsignia], [guideOfResistance, sergeantsInsignia],
      [philosophiesOfResistance, lieutenantsInsignia, dvalinsPlume], [philosophiesOfResistance, lieutenantsInsignia, dvalinsPlume], [philosophiesOfResistance, lieutenantsInsignia, dvalinsPlume],
      [philosophiesOfResistance, lieutenantsInsignia, dvalinsPlume, crownOfSagehood],
    ]
  },
  {
    name: "searing_onslaugth",
    requirements: [
      [teachingsResistance, recruitsInsignia],
      [guideOfResistance, sergeantsInsignia], [guideOfResistance, sergeantsInsignia], [guideOfResistance, sergeantsInsignia], [guideOfResistance, sergeantsInsignia],
      [philosophiesOfResistance, lieutenantsInsignia, dvalinsPlume], [philosophiesOfResistance, lieutenantsInsignia, dvalinsPlume], [philosophiesOfResistance, lieutenantsInsignia, dvalinsPlume],
      [philosophiesOfResistance, lieutenantsInsignia, dvalinsPlume, crownOfSagehood],
    ]
  },
  {
    name: "dawn",
    requirements: [
      [teachingsResistance, recruitsInsignia],
      [guideOfResistance, sergeantsInsignia], [guideOfResistance, sergeantsInsignia], [guideOfResistance, sergeantsInsignia], [guideOfResistance, sergeantsInsignia],
      [philosophiesOfResistance, lieutenantsInsignia, dvalinsPlume], [philosophiesOfResistance, lieutenantsInsignia, dvalinsPlume], [philosophiesOfResistance, lieutenantsInsignia, dvalinsPlume],
      [philosophiesOfResistance, lieutenantsInsignia, dvalinsPlume, crownOfSagehood],
    ]
  }
]

export const getDiluc = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...diluc,
    ...(withAscension ? { ascension: dilucAscension } : {}),
    ...(withTalents ? { talents: dilucTalents } : {})
  }
}

export default {
  id: 6,
  get: getDiluc
}
