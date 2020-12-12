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
  description: "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her. As much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner.",
}

export const lisaAscension = [
  [vajradaAmethystSliver, valberry, slimeCondensate],
  [vajradaAmethystFragment, lightningPrism, valberry, slimeCondensate],
  [vajradaAmethystFragment, lightningPrism, valberry, slimeSecretions],
  [vajradaAmethystChunk, lightningPrism, valberry, slimeSecretions],
  [vajradaAmethystChunk, lightningPrism, valberry, slimeConcentrate],
  [vajradaAmethystGemstone, lightningPrism, valberry, slimeConcentrate],
]

export const getLisa = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...lisa,
    ...(withAscension ? { ascension: lisaAscension } : {})
  }
}

export default {
	id: 13,
  get: getLisa
}
