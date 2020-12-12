import { IGetCharacterOptions } from './types'

import varunadaLazuriteChunk from '../materials/gems/varunada-lazurite/varunada-lazurite-chunk'
import varunadaLazuriteFragment from '../materials/gems/varunada-lazurite/varunada-lazurite-fragment'
import varunadaLazuriteGemstone from '../materials/gems/varunada-lazurite/varunada-lazurite-gemstone'
import varunadaLazuriteSliver from '../materials/gems/varunada-lazurite/varunada-lazurite-sliver'

import lieutenantsInsignia from '../materials/common/soldier-insignia/lieutenants-insignia'
import recruitsInsignia from '../materials/common/soldier-insignia/recruits-insignia'
import sergeantsInsignia from '../materials/common/soldier-insignia/sergeants-insignia'
import cleansingHeart from '../materials/bosses/cleansing-heart'
import starconch from '../materials/wild/starconch'

export const tartaglia = {
  name: "Tartaglia",
  titles: [
    "childe",
    "eleventh_of_the_fatui_harbingers"
  ],
  element: "hydro",
  weaponType: "bow",
  gender: "male",
  region: "Snezhnaya",
  rarity: 5,
  images: {
    image: "/images/characters/tartaglia-thumb.png",
  },
  affiliation: "Fatui",
  description: "Meet Tartaglia — the cunning Snezhnayan whose unpredictable personality keeps people guessing his every move.\nDon't be under any illusion as to what he might be thinking or what his intentions are. Just remember this: Behind that innocent, childlike exterior lies a finely honed instrument of war.",
}

export const tartagliaAscension = [
  [varunadaLazuriteSliver, starconch, recruitsInsignia],
  [varunadaLazuriteFragment, cleansingHeart, starconch, recruitsInsignia],
  [varunadaLazuriteFragment, cleansingHeart, starconch, sergeantsInsignia],
  [varunadaLazuriteChunk, cleansingHeart, starconch, sergeantsInsignia],
  [varunadaLazuriteChunk, cleansingHeart, starconch, lieutenantsInsignia],
  [varunadaLazuriteGemstone, cleansingHeart, starconch, lieutenantsInsignia],
]

export const getTartaglia = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...tartaglia,
    ...(withAscension ? { ascension: tartagliaAscension } : {})
  }
}

export default {
  id: 20,
  get: getTartaglia
}
