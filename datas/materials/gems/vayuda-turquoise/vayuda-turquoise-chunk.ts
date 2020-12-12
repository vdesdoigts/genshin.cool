import vayudaTurquoiseFragment from './vayuda-turquoise-fragment'

import anemoHypostasis from '../../../bosses/anemo-hypostasis'
import stormterror from '../../../bosses/stormterror'

export default {
  id: 23,
  type: "gem",
  collection: "vayuda_turquoise",
  name: "chunk",
  images: {
    image: "/images/ascensionmaterials/vayuda-turquoise-chunk.png"
  },
  droppedBy: [
    {
      ...anemoHypostasis,
      level: "+60",
    },
    {
      ...stormterror,
      level: "+60",
    }
  ],
  craft: [
    {
      ...vayudaTurquoiseFragment,
      type: "alchemy",
      amount: 3,
    },
  ],
}
