import { IGetCharacterOptions } from './types'

import vayudaTurquoiseChunk from '../materials/gems/vayuda-turquoise/vayuda-turquoise-chunk'
import vayudaTurquoiseFragment from '../materials/gems/vayuda-turquoise/vayuda-turquoise-fragment'
import vayudaTurquoiseGemstone from '../materials/gems/vayuda-turquoise/vayuda-turquoise-gemstone'
import vayudaTurquoiseSliver from '../materials/gems/vayuda-turquoise/vayuda-turquoise-sliver'

import slimeConcentrate from '../materials/common/slime/slime-concentrate'
import slimeCondensate from '../materials/common/slime/slime-condensate'
import slimeSecretions from '../materials/common/slime/slime-secretions'
import hurricaneSeed from '../materials/bosses/hurricane-seed'
import cecilia from '../materials/wild/cecilia'

import guideOfBallad from '../materials/talents/ballad/guide-ballad'
import philosophiesOfBallad from '../materials/talents/ballad/philosophies-ballad'
import teachingsBallad from '../materials/talents/ballad/teachings-ballad'
import tailOfBoreas from '../materials/bosses/tail-of-boreas'
import crownOfSagehood from '../materials/events/crown-sagehood'

export const venti = {
	id: 23,
  name: "Venti",
  titles: [
    "windborne_bard",
    "the_god_of_freedom",
    "tonedeaf_bar"
  ],
  element: "anemo",
  weaponType: "bow",
  gender: "male",
  region: "mondstadt",
  rarity: 5,
  images: {
    image: "/images/characters/venti-thumb.png",
  },
  affiliation: "Archons",
  description: "A bard that seems to have arrived on some unknown wind - sometimes sings songs as old as the hills, and other times sings poems fresh and new. Likes apples and lively places, but is not a fan of cheese or anything sticky. When using his Anemo power to control the wind, it often appears as feathers, as he's fond of that which appears light and breezy.",
}

export const ventiAscension = [
  [vayudaTurquoiseSliver, cecilia, slimeCondensate],
  [vayudaTurquoiseFragment, hurricaneSeed, cecilia, slimeCondensate],
  [vayudaTurquoiseFragment, hurricaneSeed, cecilia, slimeSecretions],
  [vayudaTurquoiseChunk, hurricaneSeed, cecilia, slimeSecretions],
  [vayudaTurquoiseChunk, hurricaneSeed, cecilia, slimeConcentrate],
  [vayudaTurquoiseGemstone, hurricaneSeed, cecilia, slimeConcentrate],
]

const ventiTalents = [
  {
    name: "divine_marksmanship",
    requirements: [
      [teachingsBallad, slimeCondensate],
      [guideOfBallad, slimeCondensate], [guideOfBallad, slimeCondensate], [guideOfBallad, slimeCondensate], [guideOfBallad, slimeCondensate],
      [philosophiesOfBallad, slimeConcentrate, tailOfBoreas], [philosophiesOfBallad, slimeConcentrate, tailOfBoreas], [philosophiesOfBallad, slimeConcentrate, tailOfBoreas],
      [philosophiesOfBallad, slimeConcentrate, tailOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "skyward_sonnet",
    requirements: [
      [teachingsBallad, slimeCondensate],
      [guideOfBallad, slimeCondensate], [guideOfBallad, slimeCondensate], [guideOfBallad, slimeCondensate], [guideOfBallad, slimeCondensate],
      [philosophiesOfBallad, slimeConcentrate, tailOfBoreas], [philosophiesOfBallad, slimeConcentrate, tailOfBoreas], [philosophiesOfBallad, slimeConcentrate, tailOfBoreas],
      [philosophiesOfBallad, slimeConcentrate, tailOfBoreas, crownOfSagehood],
    ]
  },
  {
    name: "winds_grand_ode",
    requirements: [
      [teachingsBallad, slimeCondensate],
      [guideOfBallad, slimeCondensate], [guideOfBallad, slimeCondensate], [guideOfBallad, slimeCondensate], [guideOfBallad, slimeCondensate],
      [philosophiesOfBallad, slimeConcentrate, tailOfBoreas], [philosophiesOfBallad, slimeConcentrate, tailOfBoreas], [philosophiesOfBallad, slimeConcentrate, tailOfBoreas],
      [philosophiesOfBallad, slimeConcentrate, tailOfBoreas, crownOfSagehood],
    ]
  }
]

export const getVenti = (options?: IGetCharacterOptions) => {
  const { withAscension, withTalents } = options || {}
  return {
    ...venti,
    ...(withAscension ? { ascension: ventiAscension } : {}),
    ...(withTalents ? { talents: ventiTalents } : {})
  }
}

export default {
  id: 23,
  get: getVenti
}
