import { IGetCharacterOptions } from './types'

import vajradaAmethystChunk from '../materials/gems/vajrada-amethyst/vajrada-amethyst-chunk'
import vajradaAmethystFragment from '../materials/gems/vajrada-amethyst/vajrada-amethyst-fragment'
import vajradaAmethystGemstone from '../materials/gems/vajrada-amethyst/vajrada-amethyst-gemstone'
import vajradaAmethystSliver from '../materials/gems/vajrada-amethyst/vajrada-amethyst-sliver'

import energyNectar from '../materials/common/nectar/energy-nectar'
import shimmeringNectar from '../materials/common/nectar/shimmering-nectar'
import whopperflowerNectar from '../materials/common/nectar/whopperflower-nectar'
import lightningPrism from '../materials/bosses/lightning-prism'
import corLapis from '../materials/wild/cor-lapis'

import guideOfPropsperity from '../materials/talents/ballad/guide-ballad'
import philosophiesOfPropsperity from '../materials/talents/ballad/philosophies-ballad'
import teachingsPropsperity from '../materials/talents/ballad/teachings-ballad'
import ringOfBoreas from '../materials/bosses/ring-of-boreas'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const keqing = {
  name: "Keqing",
  titles: [
    "driving_thunder",
    "yuheng_of_the_liyue_qixing"
  ],
  element: "electro",
  weaponType: "sword",
  gender: "female",
  region: "liyue",
  rarity: 5,
  images: {
    image: "/images/characters/keqing-thumb.png",
  },
  affiliation: "liyue_qixing",
  description: "kaeya.description",
}

export const KeqingAscension = [
  [vajradaAmethystSliver, corLapis, whopperflowerNectar],
  [vajradaAmethystFragment, lightningPrism, corLapis, whopperflowerNectar],
  [vajradaAmethystFragment, lightningPrism, corLapis, shimmeringNectar],
  [vajradaAmethystChunk, lightningPrism, corLapis, shimmeringNectar],
  [vajradaAmethystChunk, lightningPrism, corLapis, energyNectar],
  [vajradaAmethystGemstone, lightningPrism, corLapis, energyNectar],
]

const keqingTalents = [
  {
    name: "yunlai_swordmanship",
    requirements: [
      [teachingsPropsperity, whopperflowerNectar],
      [guideOfPropsperity, shimmeringNectar], [guideOfPropsperity, shimmeringNectar], [guideOfPropsperity, shimmeringNectar], [guideOfPropsperity, shimmeringNectar],
      [philosophiesOfPropsperity, energyNectar, ringOfBoreas], [philosophiesOfPropsperity, energyNectar, ringOfBoreas], [philosophiesOfPropsperity, energyNectar, ringOfBoreas],
      [philosophiesOfPropsperity, energyNectar, ringOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "stellar_resonator",
    requirements: [
      [teachingsPropsperity, whopperflowerNectar],
      [guideOfPropsperity, shimmeringNectar], [guideOfPropsperity, shimmeringNectar], [guideOfPropsperity, shimmeringNectar], [guideOfPropsperity, shimmeringNectar],
      [philosophiesOfPropsperity, energyNectar, ringOfBoreas], [philosophiesOfPropsperity, energyNectar, ringOfBoreas], [philosophiesOfPropsperity, energyNectar, ringOfBoreas],
      [philosophiesOfPropsperity, energyNectar, ringOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "starward_sword",
    requirements: [
      [teachingsPropsperity, whopperflowerNectar],
      [guideOfPropsperity, shimmeringNectar], [guideOfPropsperity, shimmeringNectar], [guideOfPropsperity, shimmeringNectar], [guideOfPropsperity, shimmeringNectar],
      [philosophiesOfPropsperity, energyNectar, ringOfBoreas], [philosophiesOfPropsperity, energyNectar, ringOfBoreas], [philosophiesOfPropsperity, energyNectar, ringOfBoreas],
      [philosophiesOfPropsperity, energyNectar, ringOfBoreas, crownOfSagehood],
    ]
  }
]

export const getKeqing = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...keqing,
    ...(withAscension ? { ascension: KeqingAscension } : {}),
    ...(withTalents ? { talents: keqingTalents } : {})
  }
}

export default {
	id: 11,
  get: getKeqing
}
