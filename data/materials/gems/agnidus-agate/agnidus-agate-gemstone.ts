import agnidusAgateChunk from './agnidus-agate-chunk'

import pyroRegisvine from '../../../bosses/pyro-regisvine'
import wolfOfTheNorth from '../../../bosses/wolf-of-the-north'

export default {
  id: 4,
  type: "gem",
  collection: "agnidus_agate",
  name: "gemstone",
  images: {
    image: "/images/ascensionmaterials/agnidus-agate-gemstone.png"
  },
  droppedBy: [
    {
      ...pyroRegisvine,
      level: 75,
    },
    {
      ...wolfOfTheNorth,
      level: 75,
    }
  ],
  craft: [
    {
      ...agnidusAgateChunk,
      type: "alchemy",
      amount: 3,
    }
  ],
}
