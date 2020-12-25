import prithivaTopazChunk from './prithiva-topaz-chunk'

import geoHypostasis from '../../../bosses/geo-hypostasis'
import wolfOfTheNorth from '../../../bosses/wolf-of-the-north'

export default {
  id: 12,
  type: "gem",
  collection: "prithiva_topaz",
  name: "gemstone",
  images: {
    image: "/images/ascensionmaterials/prithiva-topaz-gemstone.png"
  },
  droppedBy: [
    {
      ...geoHypostasis,
      level: 75,
    },
    {
      ...wolfOfTheNorth,
      level: 75,
    }
  ],
  craft: [
    {
      ...prithivaTopazChunk,
      type: "alchemy",
      amount: 3,
    },
  ],
}
