import { IGetCharacterOptions } from './types'

import vayudaTurquoiseChunk from '../materials/gems/vayuda-turquoise/vayuda-turquoise-chunk'
import vayudaTurquoiseFragment from '../materials/gems/vayuda-turquoise/vayuda-turquoise-fragment'
import vayudaTurquoiseGemstone from '../materials/gems/vayuda-turquoise/vayuda-turquoise-gemstone'
import vayudaTurquoiseSliver from '../materials/gems/vayuda-turquoise/vayuda-turquoise-sliver'

import energyNectar from '../materials/common/nectar/energy-nectar'
import shimmeringNectar from '../materials/common/nectar/shimmering-nectar'
import whopperflowerNectar from '../materials/common/nectar/whopperflower-nectar'
import hurricaneSeed from '../materials/bosses/hurricane-seed'
import windwheelAster from '../materials/wild/windwheel-aster'

import guideOfFreedom from '../materials/talents/freedom/guide-freedom'
import philosophiesOfFreedom from '../materials/talents/freedom/philosophies-freedom'
import teachingsFreedom from '../materials/talents/freedom/teachings-freedom'
import spiritLocketOfBoreas from '../materials/bosses/spirit-locket-of-boreas'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const sucrose = {
  name: "Sucrose",
  titles: [
    "harmless_sweetie",
    "knights_of_favonius_alchemist"
  ],
  element: "anemo",
  weaponType: "catalyst",
  gender: "female",
  region: "mondstadt",
  rarity: 4,
  images: {
    image: "/images/characters/sucrose-thumb.png",
  },
  affiliation: "knights_of_favonius",
  description: "An alchemist with an insatiable curiosity towards the world and everything in it. Attached to the Knights of Favonius as an assistant to Albedo, her area of focus is 'bio-alchemy.' She strives to enrich the world by transforming living things with the power of alchemy. Granted, the products of her research sometimes prove to be more weird than wonderful — but on the whole, she has made monumental contributions to the field of bio-alchemy.",
}

export const sucroseAscension = [
  [vayudaTurquoiseSliver, windwheelAster, whopperflowerNectar],
  [vayudaTurquoiseFragment, hurricaneSeed, windwheelAster, whopperflowerNectar],
  [vayudaTurquoiseFragment, hurricaneSeed, windwheelAster, shimmeringNectar],
  [vayudaTurquoiseChunk, hurricaneSeed, windwheelAster, shimmeringNectar],
  [vayudaTurquoiseChunk, hurricaneSeed, windwheelAster, energyNectar],
  [vayudaTurquoiseGemstone, hurricaneSeed, windwheelAster, energyNectar],
]

const sucroseTalents = [
  {
    name: "wind_spirit_creation",
    requirements: [
      [teachingsFreedom, whopperflowerNectar],
      [guideOfFreedom, shimmeringNectar], [guideOfFreedom, shimmeringNectar], [guideOfFreedom, shimmeringNectar], [guideOfFreedom, shimmeringNectar],
      [philosophiesOfFreedom, energyNectar, spiritLocketOfBoreas], [philosophiesOfFreedom, energyNectar, spiritLocketOfBoreas], [philosophiesOfFreedom, energyNectar, spiritLocketOfBoreas],
      [philosophiesOfFreedom, energyNectar, spiritLocketOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "astable_anemohypostasis_creation",
    requirements: [
      [teachingsFreedom, whopperflowerNectar],
      [guideOfFreedom, shimmeringNectar], [guideOfFreedom, shimmeringNectar], [guideOfFreedom, shimmeringNectar], [guideOfFreedom, shimmeringNectar],
      [philosophiesOfFreedom, energyNectar, spiritLocketOfBoreas], [philosophiesOfFreedom, energyNectar, spiritLocketOfBoreas], [philosophiesOfFreedom, energyNectar, spiritLocketOfBoreas],
      [philosophiesOfFreedom, energyNectar, spiritLocketOfBoreas, crownOfSagehood],]
  },
  {
    name: "forbidden_creation_isomer_75",
    requirements: [
      [teachingsFreedom, whopperflowerNectar],
      [guideOfFreedom, shimmeringNectar], [guideOfFreedom, shimmeringNectar], [guideOfFreedom, shimmeringNectar], [guideOfFreedom, shimmeringNectar],
      [philosophiesOfFreedom, energyNectar, spiritLocketOfBoreas], [philosophiesOfFreedom, energyNectar, spiritLocketOfBoreas], [philosophiesOfFreedom, energyNectar, spiritLocketOfBoreas],
      [philosophiesOfFreedom, energyNectar, spiritLocketOfBoreas, crownOfSagehood],]
  }
]

export const getSucrose = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...sucrose,
    ...(withAscension ? { ascension: sucroseAscension } : {}),
    ...(withTalents ? { talents: sucroseTalents } : {})
  }
}

export default {
  id: 19,
  get: getSucrose
}
