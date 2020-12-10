import childe from '../../bosses/childe'
import cryoRegisvine from '../../bosses/cryo-regisvine'
import wolfOfTheNorth from '../../bosses/wolf-of-the-north'

export default {
  id: 17,
  name: "shivada_jade_sliver",
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
