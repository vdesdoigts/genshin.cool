import { IGetCharacterOptions } from './types'

import prithivaTopazChunk from '../materials/gems/prithiva-topaz/prithiva-topaz-chunk'
import prithivaTopazFragment from '../materials/gems/prithiva-topaz/prithiva-topaz-fragment'
import prithivaTopazGemstone from '../materials/gems/prithiva-topaz/prithiva-topaz-gemstone'
import prithivaTopazSliver from '../materials/gems/prithiva-topaz/prithiva-topaz-sliver'

import diviningScroll from '../materials/common/scroll/divining-scroll'
import forbiddenCurseScroll from '../materials/common/scroll/forbidden-curse-scroll'
import sealedScroll from '../materials/common/scroll/sealed-scroll'
import basaltPillar from '../materials/bosses/basalt-pillar'
import cecilia from '../materials/wild/cecilia'

import guideOfBallad from '../materials/talents/ballad/guide-ballad'
import philosophiesOfBallad from '../materials/talents/ballad/philosophies-ballad'
import teachingsBallad from '../materials/talents/ballad/teachings-ballad'
import tuskOfMonocerosCaeli from '../materials/bosses/tusk-of-monoceros-caeli'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const albedo = {
	id: 25,
  name: "Albedo",
  titles: [
    "kreideprinz",
  ],
  element: "geo",
  weaponType: "sword",
  gender: "male",
  region: "mondstadt",
  rarity: 5,
  images: {
    image: "/images/characters/albedo-thumb.png",
  },
  affiliation: "knights_of_favonius",
  description: "Albedo — an alchemist based in Mondstadt, in the service of the Knights of Favonius.",
}

export const albedoAscension = [
  [prithivaTopazSliver, cecilia, diviningScroll],
  [prithivaTopazFragment, basaltPillar, cecilia, diviningScroll],
  [prithivaTopazFragment, basaltPillar, cecilia, sealedScroll],
  [prithivaTopazChunk, basaltPillar, cecilia, sealedScroll],
  [prithivaTopazChunk, basaltPillar, cecilia, forbiddenCurseScroll],
  [prithivaTopazGemstone, basaltPillar, cecilia, forbiddenCurseScroll],
]

const albedoTalents = [
  {
    name: "favonius_bladework_weiss",
    requirements: [
      [teachingsBallad, diviningScroll],
      [guideOfBallad, sealedScroll], [guideOfBallad, sealedScroll], [guideOfBallad, sealedScroll], [guideOfBallad, sealedScroll],
      [philosophiesOfBallad, forbiddenCurseScroll, tuskOfMonocerosCaeli], [philosophiesOfBallad, forbiddenCurseScroll, tuskOfMonocerosCaeli], [philosophiesOfBallad, forbiddenCurseScroll, tuskOfMonocerosCaeli],
      [philosophiesOfBallad, forbiddenCurseScroll, tuskOfMonocerosCaeli, crownOfSagehood],
    ]
  },
  {
    name: "abiogenesis_solar_isotoma",
    requirements: [
      [teachingsBallad, diviningScroll],
      [guideOfBallad, sealedScroll], [guideOfBallad, sealedScroll], [guideOfBallad, sealedScroll], [guideOfBallad, sealedScroll],
      [philosophiesOfBallad, forbiddenCurseScroll, tuskOfMonocerosCaeli], [philosophiesOfBallad, forbiddenCurseScroll, tuskOfMonocerosCaeli], [philosophiesOfBallad, forbiddenCurseScroll, tuskOfMonocerosCaeli],
      [philosophiesOfBallad, forbiddenCurseScroll, tuskOfMonocerosCaeli, crownOfSagehood],]
  },
  {
    name: "rite_of_progeniture_tectonic_tide",
    requirements: [
      [teachingsBallad, diviningScroll],
      [guideOfBallad, sealedScroll], [guideOfBallad, sealedScroll], [guideOfBallad, sealedScroll], [guideOfBallad, sealedScroll],
      [philosophiesOfBallad, forbiddenCurseScroll, tuskOfMonocerosCaeli], [philosophiesOfBallad, forbiddenCurseScroll, tuskOfMonocerosCaeli], [philosophiesOfBallad, forbiddenCurseScroll, tuskOfMonocerosCaeli],
      [philosophiesOfBallad, forbiddenCurseScroll, tuskOfMonocerosCaeli, crownOfSagehood],]
  }
]

export const getAlbedo = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...albedo,
    ...(withAscension ? { ascension: albedoAscension } : {}),
    ...(withTalents ? { talents: albedoTalents } : {})
  }
}

export default {
  id: 25,
  get: getAlbedo
}
