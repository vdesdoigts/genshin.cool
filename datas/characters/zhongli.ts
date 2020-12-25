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

import guideOfGold from '../materials/talents/gold/guide-gold'
import philosophiesOfGold from '../materials/talents/gold/philosophies-gold'
import teachingsGold from '../materials/talents/gold/teachings-gold'
import tuskOfMonocerosCaeli from '../materials/bosses/tusk-of-monoceros-caeli'
import crownOfSagehood from '../materials/events/crown-sagehood'

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

const zhongliTalents = [
  {
    name: "rain_of_stone",
    requirements: [
      [teachingsGold, slimeCondensate],
      [guideOfGold, slimeSecretions], [guideOfGold, slimeSecretions], [guideOfGold, slimeSecretions], [guideOfGold, slimeSecretions],
      [philosophiesOfGold, slimeConcentrate, tuskOfMonocerosCaeli], [philosophiesOfGold, slimeConcentrate, tuskOfMonocerosCaeli], [philosophiesOfGold, slimeConcentrate, tuskOfMonocerosCaeli],
      [philosophiesOfGold, slimeConcentrate, tuskOfMonocerosCaeli, crownOfSagehood],
    ]
  },
  {
    name: "dominus_lapidis",
    requirements: [
      [teachingsGold, slimeCondensate],
      [guideOfGold, slimeSecretions], [guideOfGold, slimeSecretions], [guideOfGold, slimeSecretions], [guideOfGold, slimeSecretions],
      [philosophiesOfGold, slimeConcentrate, tuskOfMonocerosCaeli], [philosophiesOfGold, slimeConcentrate, tuskOfMonocerosCaeli], [philosophiesOfGold, slimeConcentrate, tuskOfMonocerosCaeli],
      [philosophiesOfGold, slimeConcentrate, tuskOfMonocerosCaeli, crownOfSagehood],]
  },
  {
    name: "planet_befall",
    requirements: [
      [teachingsGold, slimeCondensate],
      [guideOfGold, slimeSecretions], [guideOfGold, slimeSecretions], [guideOfGold, slimeSecretions], [guideOfGold, slimeSecretions],
      [philosophiesOfGold, slimeConcentrate, tuskOfMonocerosCaeli], [philosophiesOfGold, slimeConcentrate, tuskOfMonocerosCaeli], [philosophiesOfGold, slimeConcentrate, tuskOfMonocerosCaeli],
      [philosophiesOfGold, slimeConcentrate, tuskOfMonocerosCaeli, crownOfSagehood],]
  }
]

export const getZhongli = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...zhongli,
    ...(withAscension ? { ascension: zhongliAscension } : {}),
    ...(withTalents ? { talents: zhongliTalents } : {})
  }
}

export default {
  id: 27,
  get: getZhongli
}
