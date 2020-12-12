import geoHypostasis from '../../../bosses/geo-hypostasis'
import wolfOfTheNorth from '../../../bosses/wolf-of-the-north'

export default {
  id: 9,
  type: "gem",
  collection: "prithiva_topaz",
  name: "sliver",
  images: {
    image: "/images/ascensionmaterials/prithiva-topaz-sliver.png"
  },
  droppedBy: [
    geoHypostasis,
    wolfOfTheNorth,
  ],
  purchasedAt: [
    {
      name: "Purchased from the Souvenir Shop"
    }
  ],
}
