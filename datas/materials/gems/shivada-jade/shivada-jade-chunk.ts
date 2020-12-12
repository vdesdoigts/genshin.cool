import shivadaJadeFragment from './shivada-jade-fragment'

import childe from '../../../bosses/childe'
import cryoRegisvine from '../../../bosses/cryo-regisvine'
import wolfOfTheNorth from '../../../bosses/wolf-of-the-north'

export default {
  id: 19,
  type: "gem",
  collection: "shivada_jade",
  name: "chunk",
  images: {
    image: "/images/ascensionmaterials/shivada-jade-chunk.png"
  },
  droppedBy: [
    {
      ...cryoRegisvine,
      level: "60+",
    },
    {
      ...wolfOfTheNorth,
      level: "60+",
    },
    {
      ...childe,
      level: "60+",
    }
  ],
  craft: [
    {
      ...shivadaJadeFragment,
      type: "alchemy",
      amount: 3,
    }
  ],
}
