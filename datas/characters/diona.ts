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
  description: "The incredibly popular bartender of the Cat's Tail tavern, rising star of Mondstadt's wine industry, and the greatest challenger to its traditional powerhouses.\nA feisty feline young lady from Springvale, any drink mixed by Diona's hand tastes delicious beyond belief.\nYet given her extreme distaste for alcohol, is her talent a blessing or a curse?",
}

export const chongyunAscension = [
  [shivadaJadeSliver, callaLily, firmArrowhead],
  [shivadaJadeFragment, hoarfrostCore, callaLily, firmArrowhead],
  [shivadaJadeFragment, hoarfrostCore, callaLily, sharpArrowhead],
  [shivadaJadeChunk, hoarfrostCore, callaLily, sharpArrowhead],
  [shivadaJadeChunk, hoarfrostCore, callaLily, weatheredArrowhead],
  [shivadaJadeGemstone, hoarfrostCore, callaLily, weatheredArrowhead],
]

export const getDiona = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...diona,
    ...(withAscension ? { ascension: chongyunAscension } : {})
  }
}

export default {
  id: 7,
  get: getDiona
}
