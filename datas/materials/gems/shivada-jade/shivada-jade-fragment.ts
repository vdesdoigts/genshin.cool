import shivadaJadeSliver from './shivada-jade-sliver'

import childe from '../../../bosses/childe'
import cryoRegisvine from '../../../bosses/cryo-regisvine'
import wolfOfTheNorth from '../../../bosses/wolf-of-the-north'

export default {
  id: 18,
  type: "gem",
  collection: "shivada_jade",
  name: "fragment",
  images: {
    image: "/images/ascensionmaterials/shivada-jade-fragment.png"
  },
  droppedBy: [
    {
      ...cryoRegisvine,
      level: 40,
    },
    {
      ...wolfOfTheNorth,
      level: 40,
    },
    {
      ...childe,
      level: 40,
    }
  ],
  "craft": [
    {
      ...shivadaJadeSliver,
      type: "alchemy",
      amount: 3,
    }
  ],
}
