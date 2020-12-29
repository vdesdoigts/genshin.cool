import { IGetCharacterOptions } from './types'

import shivadaJadeChunk from '../materials/gems/shivada-jade/shivada-jade-chunk'
import shivadaJadeFragment from '../materials/gems/shivada-jade/shivada-jade-fragment'
import shivadaJadeGemstone from '../materials/gems/shivada-jade/shivada-jade-gemstone'
import shivadaJadeSliver from '../materials/gems/shivada-jade/shivada-jade-sliver'

import firmArrowhead from '../materials/common/arrow/firm-arrowhead'
import sharpArrowhead from '../materials/common/arrow/sharp-arrowhead'
import weatheredArrowhead from '../materials/common/arrow/weathered-arrowhead'
import hoarfrostCore from '../materials/bosses/hoarfrost-core'
import callaLily from '../materials/wild/calla-lily'

import guideOfFreedom from '../materials/talents/freedom/guide-freedom'
import philosophiesOfFreedom from '../materials/talents/freedom/philosophies-freedom'
import teachingsFreedom from '../materials/talents/freedom/teachings-freedom'
import shardOfFoulLegacy from '../materials/bosses/shard-of-foul-legacy'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const diona = {
  name: "Diona",
  titles: [
    "katzlein_cocktail",
    "wine_industry_slayer"
  ],
  element: "cryo",
  weaponType: "bow",
  gender: "female",
  region: "mondstadt",
  rarity: 4,
  images: {
    image: "/images/characters/diona-thumb.png",
  },
  affiliation: "the_cat_s_tail_bar",
  description: "diona.description",
}

export const dionaAscension = [
  [shivadaJadeSliver, callaLily, firmArrowhead],
  [shivadaJadeFragment, hoarfrostCore, callaLily, firmArrowhead],
  [shivadaJadeFragment, hoarfrostCore, callaLily, sharpArrowhead],
  [shivadaJadeChunk, hoarfrostCore, callaLily, sharpArrowhead],
  [shivadaJadeChunk, hoarfrostCore, callaLily, weatheredArrowhead],
  [shivadaJadeGemstone, hoarfrostCore, callaLily, weatheredArrowhead],
]

const dionaTalents = [
  {
    name: "katzlein_style",
    requirements: [
      [teachingsFreedom, firmArrowhead],
      [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead],
      [philosophiesOfFreedom, weatheredArrowhead, shardOfFoulLegacy], [philosophiesOfFreedom, weatheredArrowhead, shardOfFoulLegacy], [philosophiesOfFreedom, weatheredArrowhead, shardOfFoulLegacy],
      [philosophiesOfFreedom, weatheredArrowhead, shardOfFoulLegacy, crownOfSagehood],
    ]
  },
  {
    name: "icy_paws",
    requirements: [
      [teachingsFreedom, firmArrowhead],
      [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead],
      [philosophiesOfFreedom, weatheredArrowhead, shardOfFoulLegacy], [philosophiesOfFreedom, weatheredArrowhead, shardOfFoulLegacy], [philosophiesOfFreedom, weatheredArrowhead, shardOfFoulLegacy],
      [philosophiesOfFreedom, weatheredArrowhead, shardOfFoulLegacy, crownOfSagehood],]
  },
  {
    name: "signature_mix",
    requirements: [
      [teachingsFreedom, firmArrowhead],
      [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead], [guideOfFreedom, sharpArrowhead],
      [philosophiesOfFreedom, weatheredArrowhead, shardOfFoulLegacy], [philosophiesOfFreedom, weatheredArrowhead, shardOfFoulLegacy], [philosophiesOfFreedom, weatheredArrowhead, shardOfFoulLegacy],
      [philosophiesOfFreedom, weatheredArrowhead, shardOfFoulLegacy, crownOfSagehood],]
  }
]

export const getDiona = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...diona,
    ...(withAscension ? { ascension: dionaAscension } : {}),
    ...(withTalents ? { talents: dionaTalents } : {})
  }
}

export default {
  id: 7,
  get: getDiona
}
