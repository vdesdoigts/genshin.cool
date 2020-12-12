import { IGetCharacterOptions } from './types'

import agnidusAgateChunk from '../materials/gems/agnidus-agate/agnidus-agate-chunk'
import agnidusAgateFragment from '../materials/gems/agnidus-agate/agnidus-agate-fragment'
import agnidusAgateGemstone from '../materials/gems/agnidus-agate/agnidus-agate-gemstone'
import agnidusAgateSliver from '../materials/gems/agnidus-agate/agnidus-agate-sliver'

import goldenRavenInsignia from '../materials/common/treasure-insignia/golden-raven-insignia'
import silverRavenInsignia from '../materials/common/treasure-insignia/silver-raven-insignia'
import treasureHoarderInsignia from '../materials/common/treasure-insignia/treasure-hoarder-insignia'
import everflameSeed from '../materials/bosses/everflame-seed'
import windwheelAster from '../materials/wild/windwheel-aster'

export const bennett = {
  name: "Bennett",
  titles: [
    "trial_by_fire",
    "leader_of_benny_s_adventure_team"
  ],
  element: "pyro",
  weaponType: "sword",
  gender: "male",
  region: "mondstadt",
  rarity: 4,
  images: {
    image: "/images/characters/bennett-thumb.png",
    card: "/gensin-impact/images/7/7f/Character_Bennett_Card.jpg",
    portrait: "/gensin-impact/images/7/73/Character_Bennett_Portrait.png"
  },
  cv: {
    english: "Cristina Vee Valenzuela",
    japanese: "Ryōta Ōsaka",
    korean: "Song HaRim",
    chinese: "Xueting Mu"
  },
  affiliation: "adventurers_guild",
  description: "The few young adventurers that the Mondstadt Adventurers' Guild has always found themselves tangled up in baffling bouts of bad luck. He is the only active member of his own adventure group, known as Benny's Adventure Team, after all the other members decided to take leave following a series of unfortunate incidents. As a result, the team is currently on the verge of being dissolved. Being unable to break the poor boy's heart, Katheryne of the Adventurers' Guild has kept Benny's Adventure Team on the books, whilst also hiding from him the fact that all the other members have long since officially left the team.",
}

export const bennettAscension = [
  [agnidusAgateSliver, windwheelAster, treasureHoarderInsignia],
  [agnidusAgateFragment, everflameSeed, windwheelAster, treasureHoarderInsignia],
  [agnidusAgateFragment, everflameSeed, windwheelAster, silverRavenInsignia],
  [agnidusAgateChunk, everflameSeed, windwheelAster, silverRavenInsignia],
  [agnidusAgateChunk, everflameSeed, windwheelAster, goldenRavenInsignia],
  [agnidusAgateGemstone, everflameSeed, windwheelAster, goldenRavenInsignia],
]

export const getBennett = (options?: IGetCharacterOptions) => {
  const { withAscension } = options || {}
  return {
    ...bennett,
    ...(withAscension ? { ascension: bennettAscension } : {})
  }
}

export default {
  id: 4,
  get: getBennett
}
