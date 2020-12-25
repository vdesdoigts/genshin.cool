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

import guideOfResistance from '../materials/talents/resistance/guide-resistance'
import philosophiesOfResistance from '../materials/talents/resistance/philosophies-resistance'
import teachingsResistance from '../materials/talents/resistance/teachings-resistance'
import dvalinsClaw from '../materials/bosses/dvalins-claw'
import crownOfSagehood from '../materials/events/crown-sagehood'

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

const noelleTalents = [
  {
    name: "favonius_bladework_maid",
    requirements: [
      [teachingsResistance, damagedMask],
      [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask],
      [philosophiesOfResistance, ominousMask, dvalinsClaw], [philosophiesOfResistance, ominousMask, dvalinsClaw], [philosophiesOfResistance, ominousMask, dvalinsClaw],
      [philosophiesOfResistance, ominousMask, dvalinsClaw, crownOfSagehood],
    ]
  },
  {
    name: "breastplate",
    requirements: [
      [teachingsResistance, damagedMask],
      [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask],
      [philosophiesOfResistance, ominousMask, dvalinsClaw], [philosophiesOfResistance, ominousMask, dvalinsClaw], [philosophiesOfResistance, ominousMask, dvalinsClaw],
      [philosophiesOfResistance, ominousMask, dvalinsClaw, crownOfSagehood],
    ]
  },
  {
    name: "sweeping_time",
    requirements: [
      [teachingsResistance, damagedMask],
      [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask], [guideOfResistance, stainedMask],
      [philosophiesOfResistance, ominousMask, dvalinsClaw], [philosophiesOfResistance, ominousMask, dvalinsClaw], [philosophiesOfResistance, ominousMask, dvalinsClaw],
      [philosophiesOfResistance, ominousMask, dvalinsClaw, crownOfSagehood],
    ]
  }
]

export const getNoelle = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...noelle,
    ...(withAscension ? { ascension: noelleAscension } : {}),
    ...(withTalents ? { talents: noelleTalents } : {})
  }
}

export default {
  id: 16,
  get: getNoelle
}
