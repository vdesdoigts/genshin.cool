import pyroRegisvine from '../../bosses/pyro-regisvine'
import wolfOfTheNorth from '../../bosses/wolf-of-the-north'

export default {
  id: 1,
  name: "agnidus_agate_sliver",
  images: {
    image: "/images/ascensionmaterials/agnidus-agate-sliver.png"
  },
  droppedBy: [
    pyroRegisvine,
    wolfOfTheNorth,
  ],
  purchasedAt: [
    {
      name: "Purchased from the Souvenir Shop",
    },
  ],
}
