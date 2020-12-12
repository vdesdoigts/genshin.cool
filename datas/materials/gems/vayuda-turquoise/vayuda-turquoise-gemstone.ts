import vayudaTurquoiseChunk from './vayuda-turquoise-chunk'

import anemoHypostasis from '../../../bosses/anemo-hypostasis'
import stormterror from '../../../bosses/stormterror'

export default {
  id: 24,
  type: "gem",
  collection: "vayuda_turquoise",
  name: "sliver",
  images: {
    image: "/images/ascensionmaterials/vayuda-turquoise-sliver.png"
  },
  droppedBy: [
    {
      ...anemoHypostasis,
      level: "+75",
    },
    {
      ...stormterror,
      level: "+75",
    }
  ],
  craft: [
    {
      ...vayudaTurquoiseChunk,
      type: "alchemy",
      amount: 3,
    },
  ],
}
