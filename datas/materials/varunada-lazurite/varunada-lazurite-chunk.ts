import varunadaLazuriteFragment from './varunada-lazurite-fragment'

import childe from '../../bosses/childe'
import oceanid from '../../bosses/oceanid'
import stormterror from '../../bosses/stormterror'

export default {
  id: 7,
  name: "varunada_lazurite_chunk",
  images: {
    image: "/images/ascensionmaterials/varunada-lazurite-chunk.png"
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
      ...varunadaLazuriteFragment,
      type: "alchemy",
      amount: 3,
    },
  ],
}
