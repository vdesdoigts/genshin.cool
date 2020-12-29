import { IGetCharacterOptions } from './types'

import varunadaLazuriteChunk from '../materials/gems/varunada-lazurite/varunada-lazurite-chunk'
import varunadaLazuriteFragment from '../materials/gems/varunada-lazurite/varunada-lazurite-fragment'
import varunadaLazuriteGemstone from '../materials/gems/varunada-lazurite/varunada-lazurite-gemstone'
import varunadaLazuriteSliver from '../materials/gems/varunada-lazurite/varunada-lazurite-sliver'

import energyNectar from '../materials/common/nectar/energy-nectar'
import shimmeringNectar from '../materials/common/nectar/shimmering-nectar'
import whopperflowerNectar from '../materials/common/nectar/whopperflower-nectar'
import cleansingHeart from '../materials/bosses/cleansing-heart'
import philanemoMushroom from '../materials/wild/philanemo-mushroom'

import guideOfResistance from '../materials/talents/resistance/guide-resistance'
import philosophiesOfResistance from '../materials/talents/resistance/philosophies-resistance'
import teachingsResistance from '../materials/talents/resistance/teachings-resistance'
import ringOfBoreas from '../materials/bosses/ring-of-boreas'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const mona = {
  name: "Mona",
  titles: [
    "enigmatic_astrologer",
    "astral_reflection"
  ],
  element: "hydro",
  weaponType: "catalyst",
  gender: "female",
  region: "mondstadt",
  rarity: 5,
  images: {
    image: "/images/characters/mona-thumb.png",
  },
  affiliation: null,
  description: "mona.description",
}

export const monaAscension = [
  [varunadaLazuriteSliver, philanemoMushroom, whopperflowerNectar],
  [varunadaLazuriteFragment, cleansingHeart, philanemoMushroom, whopperflowerNectar],
  [varunadaLazuriteFragment, cleansingHeart, philanemoMushroom, shimmeringNectar],
  [varunadaLazuriteChunk, cleansingHeart, philanemoMushroom, shimmeringNectar],
  [varunadaLazuriteChunk, cleansingHeart, philanemoMushroom, energyNectar],
  [varunadaLazuriteGemstone, cleansingHeart, philanemoMushroom, energyNectar],
]

const monaTalents = [
  {
    name: "ripple_of_fate",
    requirements: [
      [teachingsResistance, whopperflowerNectar],
      [guideOfResistance, shimmeringNectar], [guideOfResistance, shimmeringNectar], [guideOfResistance, shimmeringNectar], [guideOfResistance, shimmeringNectar],
      [philosophiesOfResistance, energyNectar, ringOfBoreas], [philosophiesOfResistance, energyNectar, ringOfBoreas], [philosophiesOfResistance, energyNectar, ringOfBoreas],
      [philosophiesOfResistance, energyNectar, ringOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "mirror_reflection_of_doom",
    requirements: [
      [teachingsResistance, whopperflowerNectar],
      [guideOfResistance, shimmeringNectar], [guideOfResistance, shimmeringNectar], [guideOfResistance, shimmeringNectar], [guideOfResistance, shimmeringNectar],
      [philosophiesOfResistance, energyNectar, ringOfBoreas], [philosophiesOfResistance, energyNectar, ringOfBoreas], [philosophiesOfResistance, energyNectar, ringOfBoreas],
      [philosophiesOfResistance, energyNectar, ringOfBoreas, crownOfSagehood],]
  },
  {
    name: "stellaris_phantasm",
    requirements: [
      [teachingsResistance, whopperflowerNectar],
      [guideOfResistance, shimmeringNectar], [guideOfResistance, shimmeringNectar], [guideOfResistance, shimmeringNectar], [guideOfResistance, shimmeringNectar],
      [philosophiesOfResistance, energyNectar, ringOfBoreas], [philosophiesOfResistance, energyNectar, ringOfBoreas], [philosophiesOfResistance, energyNectar, ringOfBoreas],
      [philosophiesOfResistance, energyNectar, ringOfBoreas, crownOfSagehood],]
  }
]

export const getMona = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...mona,
    ...(withAscension ? { ascension: monaAscension } : {}),
    ...(withTalents ? { talents: monaTalents } : {})
  }
}

export default {
  id: 14,
  get: getMona
}
