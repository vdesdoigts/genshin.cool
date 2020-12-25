import agnidusAgateFragment from './agnidus-agate-fragment'

import pyroRegisvine from '../../../bosses/pyro-regisvine'
import wolfOfTheNorth from '../../../bosses/wolf-of-the-north'

export default {
  id: 3,
  type: "gem",
  collection: "agnidus_agate",
  name: "chunk",
  images: {
    image: "/images/ascensionmaterials/agnidus-agate-chunk.png"
  },
  droppedBy: [
    {
      ...pyroRegisvine,
      level: 60,
    },
    {
      ...wolfOfTheNorth,
      level: 60,
    }
  ],
  craft: [
    {
      ...agnidusAgateFragment,
      type: "alchemy",
      amount: 3,
    }
  ],
}
