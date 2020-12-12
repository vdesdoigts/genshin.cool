import vayudaTurquoiseSliver from './vayuda-turquoise-sliver'

import anemoHypostasis from '../../../bosses/anemo-hypostasis'
import stormterror from '../../../bosses/stormterror'

export default {
  id: 22,
  type: "gem",
  collection: "vayuda_turquoise",
  name: "fragment",
  images: {
    image: "/images/ascensionmaterials/vayuda-turquoise-fragment.png"
  },
  droppedBy: [
    {
      ...anemoHypostasis,
      level: "+40",
    },
    {
      ...stormterror,
      level: "+40",
    }
  ],
  craft: [
    {
      ...vayudaTurquoiseSliver,
      type: "alchemy",
      amount: 3,
    },
  ],
}
