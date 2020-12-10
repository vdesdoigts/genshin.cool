import anemoHypostasis from '../../bosses/anemo-hypostasis'
import stormterror from '../../bosses/stormterror'

export default {
  id: 21,
  name: "vayuda_turquoise_sliver",
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
