import prithivaTopazSliver from './prithiva-topaz-sliver'

import geoHypostasis from '../../../bosses/geo-hypostasis'
import wolfOfTheNorth from '../../../bosses/wolf-of-the-north'

export default {
  id: 10,
  type: "gem",
  collection: "prithiva_topaz",
  name: "fragment",
  images: {
    image: "/images/ascensionmaterials/prithiva-topaz-fragment.png"
  },
  droppedBy: [
    {
      ...geoHypostasis,
      level: 40,
    },
    {
      ...wolfOfTheNorth,
      level: 40,
    }
  ],
  craft: [
    {
      ...prithivaTopazSliver,
      type: "alchemy",
      amount: 3,
    },
  ],
}
