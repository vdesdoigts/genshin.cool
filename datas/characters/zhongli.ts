import { IGetCharacterOptions } from './types'

import prithivaTopazChunk from '../materials/gems/prithiva-topaz/prithiva-topaz-chunk'
import prithivaTopazFragment from '../materials/gems/prithiva-topaz/prithiva-topaz-fragment'
import prithivaTopazGemstone from '../materials/gems/prithiva-topaz/prithiva-topaz-gemstone'
import prithivaTopazSliver from '../materials/gems/prithiva-topaz/prithiva-topaz-sliver'

import slimeConcentrate from '../materials/common/slime/slime-concentrate'
import slimeCondensate from '../materials/common/slime/slime-condensate'
import slimeSecretions from '../materials/common/slime/slime-secretions'
import basaltPillar from '../materials/bosses/basalt-pillar'
import corLapis from '../materials/wild/cor-lapis'

export const zhongli = {
	id: 27,
  name: "Zhongli",
  titles: [
    "vago_mundo"
  ],
  element: "geo",
  weaponType: "polearm",
  gender: "male",
  region: "liyue",
  rarity: 5,
  images: {
    image: "/images/characters/zhongli-thumb.png",
  },
  affiliation: "wangsheng_funeral_parlor",
  description: "",
}


export const zhongliAscension = [
  [prithivaTopazSliver, corLapis, slimeCondensate],
  [prithivaTopazFragment, basaltPillar, corLapis, slimeCondensate],
  [prithivaTopazFragment, basaltPillar, corLapis, slimeSecretions],
  [prithivaTopazChunk, basaltPillar, corLapis, slimeSecretions],
  [prithivaTopazChunk, basaltPillar, corLapis, slimeConcentrate],
  [prithivaTopazGemstone, basaltPillar, corLapis, slimeConcentrate],
]

export const getZhongli = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...zhongli,
    ...(withAscension ? { ascension: zhongliAscension } : {})
  }
}

export default {
  id: 27,
  get: getZhongli
}
