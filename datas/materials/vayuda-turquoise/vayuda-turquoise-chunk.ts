import vayudaTurquoiseFragment from './vayuda-turquoise-fragment'

import anemoHypostasis from '../../bosses/anemo-hypostasis'
import stormterror from '../../bosses/stormterror'

export default {
  id: 21,
  name: "vayuda_turquoise_chunk",
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
