import { IGetCharacterOptions } from './types'

import prithivaTopazChunk from '../materials/gems/prithiva-topaz/prithiva-topaz-chunk'
import prithivaTopazFragment from '../materials/gems/prithiva-topaz/prithiva-topaz-fragment'
import prithivaTopazGemstone from '../materials/gems/prithiva-topaz/prithiva-topaz-gemstone'
import prithivaTopazSliver from '../materials/gems/prithiva-topaz/prithiva-topaz-sliver'

import damagedMask from '../materials/common/mask/damaged-mask'
import ominousMask from '../materials/common/mask/ominous-mask'
import stainedMask from '../materials/common/mask/stained-mask'
import basaltPillar from '../materials/bosses/basalt-pillar'
import valberry from '../materials/wild/valberry'

export const noelle = {
  name: "Noelle",
  titles: [
    "chivalric_blossom",
    "maid_of_favonius"
  ],
  element: "geo",
  weaponType: "claymore",
  gender: "female",
  region: "mondstadt",
  rarity: 4,
  images: {
    image: "/images/characters/noelle-thumb.png",
  },
  affiliation: "knights_of_favonius",
  description: "Like most of Mondstadt's young people, Noelle always dreamed of being a knight of Favonius when she grew up. She may not have what it takes to be a knight just yet, but she is learning. Working as a maid at the Knights' headquarters, she is constantly taking notes on what constitutes knightly speech, knightly conduct, and knightly customs. She holds firm to her belief that one day she will join their ranks - she just needs to keep trying her hardest at everything she does.",
}

export const noelleAscension = [
  [prithivaTopazSliver, valberry, damagedMask],
  [prithivaTopazFragment, basaltPillar, valberry, damagedMask],
  [prithivaTopazFragment, basaltPillar, valberry, stainedMask],
  [prithivaTopazChunk, basaltPillar, valberry, stainedMask],
  [prithivaTopazChunk, basaltPillar, valberry, ominousMask],
  [prithivaTopazGemstone, basaltPillar, valberry, ominousMask],
]

export const getNoelle = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...noelle,
    ...(withAscension ? { ascension: noelleAscension } : {})
  }
}

export default {
  id: 16,
  get: getNoelle
}
