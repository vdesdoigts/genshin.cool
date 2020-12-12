import childe from '../../../bosses/childe'
import electroHypostasis from '../../../bosses/electro-hypostasis'
import stormterror from '../../../bosses/stormterror'

export default {
  id: 13,
  type: "gem",
  collection: "vajrada_amethyst",
  name: "sliver",
  images: {
    image: "/images/ascensionmaterials/vajrada-amethyst-sliver.png"
  },
  droppedBy: [
    electroHypostasis,
    stormterror,
    childe,
  ],
  purchasedAt: [
    {
      name: "Purchased from the Souvenir Shop"
    }
  ],
}
