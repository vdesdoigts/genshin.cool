import anemoHypostasis from '../../../bosses/anemo-hypostasis'
import stormterror from '../../../bosses/stormterror'

export default {
  id: 21,
  type: "gem",
  collection: "vayuda_turquoise",
  name: "sliver",
  images: {
    image: "/images/ascensionmaterials/vayuda-turquoise-sliver.png"
  },
  droppedBy: [
    anemoHypostasis,
    stormterror,
  ],
  purchasedAt: [
    {
      name: "Purchased from the Souvenir Shop"
    }
  ],
}
