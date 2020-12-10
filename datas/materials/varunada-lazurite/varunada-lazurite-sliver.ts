import childe from '../../bosses/childe'
import oceanid from '../../bosses/oceanid'
import stormterror from '../../bosses/stormterror'

export default {
  id: 5,
  name: "varunada_lazurite_sliver",
  images: {
    image: "/images/ascensionmaterials/varunada-lazurite-sliver.png"
  },
  droppedBy: [
    oceanid,
    stormterror,
    childe,
  ],
  purchasedAt: [
    {
      name: "Purchased from the Souvenir Shop"
    }
  ],
}
