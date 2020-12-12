import prithivaTopazFragment from './prithiva-topaz-fragment'

import geoHypostasis from '../../../bosses/geo-hypostasis'
import wolfOfTheNorth from '../../../bosses/wolf-of-the-north'

export default {
  id: 11,
  type: "gem",
  collection: "prithiva_topaz",
  name: "chunk",
  images: {
    image: "/images/ascensionmaterials/prithiva-topaz-chunk.png"
  },
  droppedBy: [
    {
      ...geoHypostasis,
      level: "40+",
    },

    {
      ...wolfOfTheNorth,
      level: "40+",
    }
  ],
  craft: [
    {
      ...prithivaTopazFragment,
      type: "alchemy",
      amount: 3,
    }
  ],
}
