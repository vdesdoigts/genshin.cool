import vajradaAmethystChunk from './vajrada-amethyst-chunk'

import childe from '../../../bosses/childe'
import electroHypostasis from '../../../bosses/electro-hypostasis'
import stormterror from '../../../bosses/stormterror'

export default {
  id: 16,
  type: "gem",
  collection: "vajrada_amethyst",
  name: "gemstone",
  images: {
    image: "/images/ascensionmaterials/vajrada-amethyst-gemstone.png"
  },
  droppedBy: [
    {
      ...electroHypostasis,
      level: 75,
    },
    {
      ...stormterror,
      level: 75,
    },
    {
      ...childe,
      level: 75,
    }
  ],
  craft: [
    {
      ...vajradaAmethystChunk,
      type: "alchemy",
      amount: 3,
    },
  ],
}
