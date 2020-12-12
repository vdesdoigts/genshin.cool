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

export const getSucrose = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...sucrose,
    ...(withAscension ? { ascension: sucroseAscension } : {})
  }
}

export default {
  id: 19,
  get: getSucrose
}
