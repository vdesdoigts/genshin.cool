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
  affiliation: "n/a",
  description: "A mysterious young astrologer who proclaims herself to be 'Astrologist Mona Megistus,' and who possesses abilities to match the title. Erudite, but prideful.Though she is often strapped for cash and lives a life of thrift, she is resolved to never use astrology for profit... It is this very resolution that has caused her to constantly fret about money.",
}

export const monaAscension = [
  [varunadaLazuriteSliver, philanemoMushroom, whopperflowerNectar],
  [varunadaLazuriteFragment, cleansingHeart, philanemoMushroom, whopperflowerNectar],
  [varunadaLazuriteFragment, cleansingHeart, philanemoMushroom, shimmeringNectar],
  [varunadaLazuriteChunk, cleansingHeart, philanemoMushroom, shimmeringNectar],
  [varunadaLazuriteChunk, cleansingHeart, philanemoMushroom, energyNectar],
  [varunadaLazuriteGemstone, cleansingHeart, philanemoMushroom, energyNectar],
]

export const getMona = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...mona,
    ...(withAscension ? { ascension: monaAscension } : {})
  }
}

export default {
  id: 14,
  get: getMona
}
