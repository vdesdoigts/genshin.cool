import varunadaLazuriteSliver from './varunada-lazurite-sliver'

import childe from '../../bosses/childe'
import oceanid from '../../bosses/oceanid'
import stormterror from '../../bosses/stormterror'

export default {
  id: 6,
  name: "varunada_lazurite_fragment",
  images: {
    image: "/images/ascensionmaterials/varunada-lazurite-fragment.png"
  },
  droppedBy: [
    {
      ...oceanid,
      level: "40+",
    },
    {
      ...stormterror,
      level: "40+",
    },
    {
      ...childe,
      level: "40+",
    }
    ,
  ],
  craft: [
    {
      ...varunadaLazuriteSliver,
      type: "alchemy",
      amount: 3,
    },
  ],
}
