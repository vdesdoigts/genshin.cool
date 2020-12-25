import shivadaJadeChunk from './shivada-jade-chunk'

import childe from '../../../bosses/childe'
import cryoRegisvine from '../../../bosses/cryo-regisvine'
import wolfOfTheNorth from '../../../bosses/wolf-of-the-north'

export default {
  id: 20,
  type: "gem",
  collection: "shivada_jade",
  name: "gemstone",
  images: {
    image: "/images/ascensionmaterials/shivada-jade-gemstone.png"
  },
  droppedBy: [
    {
      ...cryoRegisvine,
      level: 75,
    },
    {
      ...wolfOfTheNorth,
      level: 75,
    },
    {
      ...childe,
      level: 75,
    }
  ],
  craft: [
    {
      ...shivadaJadeChunk,
      type: "alchemy",
      amount: 3,
    }
  ],
}
