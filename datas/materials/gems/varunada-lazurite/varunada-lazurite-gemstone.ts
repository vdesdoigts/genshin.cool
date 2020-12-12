import varunadaLazuriteChunk from './varunada-lazurite-chunk'

import childe from '../../../bosses/childe'
import oceanid from '../../../bosses/oceanid'
import stormterror from '../../../bosses/stormterror'

export default {
  id: 8,
  type: "gem",
  collection: "varunada_lazurite",
  name: "gemstone",
  images: {
    image: "/images/ascensionmaterials/varunada-lazurite-gemstone.png"
  },
  droppedBy: [
    {
      ...oceanid,
      level: "60+",
    },
    {
      ...stormterror,
      level: "60+",
    },
    {
      ...childe,
      level: "60+",
    }
    ,
  ],
  craft: [
    {
      ...varunadaLazuriteChunk,
      type: "alchemy",
      amount: 3,
    },
  ],
}
