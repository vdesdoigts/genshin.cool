import vajradaAmethystSliver from './vajrada-amethyst-sliver'

import childe from '../../../bosses/childe'
import electroHypostasis from '../../../bosses/electro-hypostasis'
import stormterror from '../../../bosses/stormterror'

export default {
  id: 14,
  type: "gem",
  collection: "vajrada_amethyst",
  name: "fragment",
  images: {
    image: "/images/ascensionmaterials/vajrada-amethyst-fragment.png"
  },
  droppedBy: [
    {
      ...electroHypostasis,
      level: 40,
    },
    {
      ...stormterror,
      level: 40,
    },
    {
      ...childe,
      level: 40,
    }
  ],
  craft: [
    {
      ...vajradaAmethystSliver,
      type: "alchemy",
      amount: 3,
    },
  ],
}
