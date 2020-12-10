import geoHypostasis from '../../bosses/geo-hypostasis'
import wolfOfTheNorth from '../../bosses/wolf-of-the-north'

export default {
  id: 9,
  name: "prithiva_topaz_sliver",
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
