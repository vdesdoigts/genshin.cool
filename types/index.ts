export type IRoster = IRosterCharacter[]

export type IRosterCharacter = {
  isDisabled?: boolean
  character: {
    name: ICharacter['name']
  }
  artifacts: {
    flower: {
      name: IArtifactItem['name']
    }
    plume: {
      name: IArtifactItem['name']
    }
    sands: {
      name: IArtifactItem['name']
    }
    goblet: {
      name: IArtifactItem['name']
    }
    circlet: {
      name: IArtifactItem['name']
    }
  },
  weapon: {
    name: IWeapon['name']
  }
}

export type IArtifact = {
  name: string
  minrarity: number
  maxrarity: number
  flower: IArtifactItem,
  plume: IArtifactItem,
  sands: IArtifactItem,
  goblet: IArtifactItem,
  circlet: IArtifactItem,
  '2pc': string
  '4pc': string
  drop: {
    4: string[]
    5: []
  }
}

export type IArtifactItem = {
  name: string
  images: {
    image: string
  },
  description: string
}

export type IArtifactType = 'flower' | 'plume' | 'sands' | 'goblet' | 'circlet'

export type ICharacter = {
  name: string
  titles: string[]
  element: string
  weapontype: string,
  gender: string,
  rarity: number
  images: {
    image: string
    card: string
    portrait: string
  },
  cv: {
    japanese: string
    korean: string
    chinese: string
  },
  affiliation: string
  description: string
  url: string
}

export type IWeapon = {
  name: string
  weapontype: string
  rarity: number
  images: {
    image: string
  },
  baseatk: string
  ability: string
  passive: {
    passive_name: string
    refinement_effect: {
      refine_one: string
      refine_two: string
      refine_three: string
      refine_four: string
      refine_five: string
    }
  },
  description: string
  weaponmaterialtype: string,
  url: string
}
