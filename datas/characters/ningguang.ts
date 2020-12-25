import { IGetCharacterOptions } from './types'

import prithivaTopazChunk from '../materials/gems/prithiva-topaz/prithiva-topaz-chunk'
import prithivaTopazFragment from '../materials/gems/prithiva-topaz/prithiva-topaz-fragment'
import prithivaTopazGemstone from '../materials/gems/prithiva-topaz/prithiva-topaz-gemstone'
import prithivaTopazSliver from '../materials/gems/prithiva-topaz/prithiva-topaz-sliver'

import lieutenantsInsignia from '../materials/common/soldier-insignia/lieutenants-insignia'
import recruitsInsignia from '../materials/common/soldier-insignia/recruits-insignia'
import sergeantsInsignia from '../materials/common/soldier-insignia/sergeants-insignia'
import basaltPillar from '../materials/bosses/basalt-pillar'
import glazeLily from '../materials/wild/glaze-lily'

import guideOfProsperity from '../materials/talents/prosperity/guide-prosperity'
import philosophiesOfProsperity from '../materials/talents/prosperity/philosophies-prosperity'
import teachingsProsperity from '../materials/talents/prosperity/teachings-prosperity'
import spiritLocketOfBoreas from '../materials/bosses/spirit-locket-of-boreas'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const ningguang = {
  name: "Ningguang",
  titles: [
    "eclipsing_star",
    "lady_of_the_jade_chamber"
  ],
  element: "geo",
  weaponType: "catalyst",
  gender: "female",
  region: "liyue",
  rarity: 4,
  images: {
    image: "/images/characters/ningguang-thumb.png",
  },
  affiliation: "liyue_qixing",
  description: "Owner of the Jade Chamber in the skies above Liyue, there are stories abound about Ningguang, with her elegance and mysterious smile. As a Tianquan of the Liyue Qixing, not only does she embody law and order, she also represents fortune and wit.",
}

export const ningguangAscension = [
  [prithivaTopazSliver, glazeLily, recruitsInsignia],
  [prithivaTopazFragment, basaltPillar, glazeLily, recruitsInsignia],
  [prithivaTopazFragment, basaltPillar, glazeLily, sergeantsInsignia],
  [prithivaTopazChunk, basaltPillar, glazeLily, sergeantsInsignia],
  [prithivaTopazChunk, basaltPillar, glazeLily, lieutenantsInsignia],
  [prithivaTopazGemstone, basaltPillar, glazeLily, lieutenantsInsignia],
]

const ningguangTalents = [
  {
    name: "sparkling_scatter",
    requirements: [
      [teachingsProsperity, recruitsInsignia],
      [guideOfProsperity, sergeantsInsignia], [guideOfProsperity, sergeantsInsignia], [guideOfProsperity, sergeantsInsignia], [guideOfProsperity, sergeantsInsignia],
      [philosophiesOfProsperity, lieutenantsInsignia, spiritLocketOfBoreas], [philosophiesOfProsperity, lieutenantsInsignia, spiritLocketOfBoreas], [philosophiesOfProsperity, lieutenantsInsignia, spiritLocketOfBoreas],
      [philosophiesOfProsperity, lieutenantsInsignia, spiritLocketOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "jade_screen",
    requirements: [
      [teachingsProsperity, recruitsInsignia],
      [guideOfProsperity, sergeantsInsignia], [guideOfProsperity, sergeantsInsignia], [guideOfProsperity, sergeantsInsignia], [guideOfProsperity, sergeantsInsignia],
      [philosophiesOfProsperity, lieutenantsInsignia, spiritLocketOfBoreas], [philosophiesOfProsperity, lieutenantsInsignia, spiritLocketOfBoreas], [philosophiesOfProsperity, lieutenantsInsignia, spiritLocketOfBoreas],
      [philosophiesOfProsperity, lieutenantsInsignia, spiritLocketOfBoreas, crownOfSagehood],]
  },
  {
    name: "starshatter",
    requirements: [
      [teachingsProsperity, recruitsInsignia],
      [guideOfProsperity, sergeantsInsignia], [guideOfProsperity, sergeantsInsignia], [guideOfProsperity, sergeantsInsignia], [guideOfProsperity, sergeantsInsignia],
      [philosophiesOfProsperity, lieutenantsInsignia, spiritLocketOfBoreas], [philosophiesOfProsperity, lieutenantsInsignia, spiritLocketOfBoreas], [philosophiesOfProsperity, lieutenantsInsignia, spiritLocketOfBoreas],
      [philosophiesOfProsperity, lieutenantsInsignia, spiritLocketOfBoreas, crownOfSagehood],]
  }
]

export const getNingguang = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...ningguang,
    ...(withAscension ? { ascension: ningguangAscension } : {}),
    ...(withTalents ? { talents: ningguangTalents } : {})
  }
}

export default {
  id: 15,
  get: getNingguang
}
