import agnidusAgateSliver from './agnidus-agate-sliver'

import pyroRegisvine from '../../../bosses/pyro-regisvine'
import wolfOfTheNorth from '../../../bosses/wolf-of-the-north'

export default {
  id: 2,
  type: "gem",
  collection: "agnidus_agate",
  name: "fragment",
  images: {
    image: "/images/ascensionmaterials/agnidus-agate-fragment.png"
  },
  droppedBy: [
    {
      ...pyroRegisvine,
      level: 40,
    },
    {
      ...wolfOfTheNorth,
      level: 40,
    }
  ],
  craft: [
    {
      ...agnidusAgateSliver,
      type: "alchemy",
      amount: 3,
    }
  ],
}
