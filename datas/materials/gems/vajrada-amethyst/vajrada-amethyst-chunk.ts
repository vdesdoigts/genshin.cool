import vajradaAmethystFragment from './vajrada-amethyst-fragment'

import childe from '../../../bosses/childe'
import electroHypostasis from '../../../bosses/electro-hypostasis'
import stormterror from '../../../bosses/stormterror'

export default {
  id: 15,
  type: "gem",
  collection: "vajrada_amethyst",
  name: "chunk",
  images: {
    image: "/images/ascensionmaterials/vajrada-amethyst-chunk.png"
  },
  droppedBy: [
    {
      ...electroHypostasis,
      level: 60,
    },
    {
      ...stormterror,
      level: 60,
    },
    {
      ...childe,
      level: 60,
    }
  ],
  craft: [
    {
      ...vajradaAmethystFragment,
      type: "alchemy",
      amount: 3,
    },
  ],
}
