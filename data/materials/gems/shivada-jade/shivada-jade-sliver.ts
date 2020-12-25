import childe from '../../../bosses/childe'
import cryoRegisvine from '../../../bosses/cryo-regisvine'
import wolfOfTheNorth from '../../../bosses/wolf-of-the-north'

export default {
  id: 17,
  type: "gem",
  collection: "shivada_jade",
  name: "sliver",
  images: {
    image: "/images/ascensionmaterials/shivada-jade-sliver.png"
  },
  droppedBy: [
    cryoRegisvine,
    wolfOfTheNorth,
    childe,
  ],
  purchasedAt: [
    {
      name: "Purchased from the Souvenir Shop"
    }
  ],
}
