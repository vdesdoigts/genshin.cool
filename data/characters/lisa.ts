import { IGetCharacterOptions } from './types'

import vajradaAmethystChunk from '../materials/gems/vajrada-amethyst/vajrada-amethyst-chunk'
import vajradaAmethystFragment from '../materials/gems/vajrada-amethyst/vajrada-amethyst-fragment'
import vajradaAmethystGemstone from '../materials/gems/vajrada-amethyst/vajrada-amethyst-gemstone'
import vajradaAmethystSliver from '../materials/gems/vajrada-amethyst/vajrada-amethyst-sliver'

import slimeConcentrate from '../materials/common/slime/slime-concentrate'
import slimeCondensate from '../materials/common/slime/slime-condensate'
import slimeSecretions from '../materials/common/slime/slime-secretions'
import lightningPrism from '../materials/bosses/lightning-prism'
import valberry from '../materials/wild/valberry'

import guideOfBallad from '../materials/talents/ballad/guide-ballad'
import philosophiesOfBallad from '../materials/talents/ballad/philosophies-ballad'
import teachingsBallad from '../materials/talents/ballad/teachings-ballad'
import dvalinsPlume from '../materials/bosses/dvalins-plume'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const lisa = {
  name: "Lisa",
  titles: [
    "rose_witch",
    "the_librarian"
  ],
  element: "electro",
  weaponType: "catalyst",
  gender: "female",
  region: "mondstadt",
  rarity: 4,
  images: {
    image: "/images/characters/lisa-thumb.png",
  },
  affiliation: "knights_of_favonius",
  description: "lisa.description",
}

export const lisaAscension = [
  [vajradaAmethystSliver, valberry, slimeCondensate],
  [vajradaAmethystFragment, lightningPrism, valberry, slimeCondensate],
  [vajradaAmethystFragment, lightningPrism, valberry, slimeSecretions],
  [vajradaAmethystChunk, lightningPrism, valberry, slimeSecretions],
  [vajradaAmethystChunk, lightningPrism, valberry, slimeConcentrate],
  [vajradaAmethystGemstone, lightningPrism, valberry, slimeConcentrate],
]

const lisaTalents = [
  {
    name: "lightning_touch",
    requirements: [
      [teachingsBallad, slimeCondensate],
      [guideOfBallad, slimeSecretions], [guideOfBallad, slimeSecretions], [guideOfBallad, slimeSecretions], [guideOfBallad, slimeSecretions],
      [philosophiesOfBallad, slimeConcentrate, dvalinsPlume], [philosophiesOfBallad, slimeConcentrate, dvalinsPlume], [philosophiesOfBallad, slimeConcentrate, dvalinsPlume],
      [philosophiesOfBallad, slimeConcentrate, dvalinsPlume, crownOfSagehood],
    ]
  },
  {
    name: "violet_ark",
    requirements: [
      [teachingsBallad, slimeCondensate],
      [guideOfBallad, slimeSecretions], [guideOfBallad, slimeSecretions], [guideOfBallad, slimeSecretions], [guideOfBallad, slimeSecretions],
      [philosophiesOfBallad, slimeConcentrate, dvalinsPlume], [philosophiesOfBallad, slimeConcentrate, dvalinsPlume], [philosophiesOfBallad, slimeConcentrate, dvalinsPlume],
      [philosophiesOfBallad, slimeConcentrate, dvalinsPlume, crownOfSagehood],
    ]
  },
  {
    name: "lightning_rose",
    requirements: [
      [teachingsBallad, slimeCondensate],
      [guideOfBallad, slimeSecretions], [guideOfBallad, slimeSecretions], [guideOfBallad, slimeSecretions], [guideOfBallad, slimeSecretions],
      [philosophiesOfBallad, slimeConcentrate, dvalinsPlume], [philosophiesOfBallad, slimeConcentrate, dvalinsPlume], [philosophiesOfBallad, slimeConcentrate, dvalinsPlume],
      [philosophiesOfBallad, slimeConcentrate, dvalinsPlume, crownOfSagehood],
    ]
  }
]

export const getLisa = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...lisa,
    ...(withAscension ? { ascension: lisaAscension } : {}),
    ...(withTalents ? { talents: lisaTalents } : {})
  }
}

export default {
	id: 13,
  get: getLisa
}
