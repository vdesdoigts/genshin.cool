export type IProfile = {
  name: string
  roster: IRoster
  disabledRoster: IRoster
}

export type IRoster = IRosterCharacter[]

export type IRosterCharacter = {
  isDisabled?: boolean
  character: {
    id: ICharacter['id']
    ascension?: number
  }
  artifacts?: {
    flower?: {
      id: IArtifactItem['id']
    }
    plume?: {
      id: IArtifactItem['id']
    }
    sands?: {
      id: IArtifactItem['id']
    }
    goblet?: {
      id: IArtifactItem['id']
    }
    circlet?: {
      id: IArtifactItem['id']
    }
  },
  weapon?: {
    id: IWeapon['id']
  }
}

export type IArtifact = {
  id: number
  name: string
  minrarity: number | string
  maxrarity: number | string
  flower?: IArtifactItem,
  plume?: IArtifactItem,
  sands?: IArtifactItem,
  goblet?: IArtifactItem,
  circlet?: IArtifactItem,
  '2pc'?: string
  '4pc'?: string
  drop: {
    1?: string[]
    2?: string[]
    3?: string[]
    4?: string[]
    5?: string[]
  }
}

export type IArtifactItem = {
  id: number
  name: string
  images: {
    image: string
  },
  description: string
}

export type IArtifactType = 'flower' | 'plume' | 'sands' | 'goblet' | 'circlet'

export type IArtifactCollection = {
  flower?: IArtifactItem
  plume?: IArtifactItem
  sands?: IArtifactItem
  goblet?: IArtifactItem
  circlet?: IArtifactItem
}

export type IAscensionMaterial = {
  id: number
  name: string
  type: {
    id: number
    name: string
  },
  rarity: number
  ascensions: number[]
  images: {
    image: string
  },
  url: string
  droppedby: {
    name: string
    type?: string
    images?: {
      image: string
    }
  }[]
  purchasedat?: { name: string }[]
  craft?: {
    type: string
    ascensionmaterialid: number
    name: string
    amount: number
    images: {
      image: string
    }
  }[]
  characters: ICharacter['id'][]
}

export type ICharacter = {
  id: number
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
  talentmaterialtype: {
    id: ITalentMaterialType['id']
    name: ITalentMaterialType['name']
  }
  ascensionmaterials?: Pick<IAscensionMaterial, 'id' | 'name'>[]
}

export type ITalentMaterialType = {
  id: number
	name: string
	'2starname': string
	'3starname': string
	'4starname': string
	day: string[]
	location: string
	region: string
	domainofmastery: string
  images: {
    image: string
  }
}

export type IWeapon = {
  id: number
  name: string
  weapontype: string
  rarity: number
  images: {
    image: string
  },
  baseatk: string
  ability: string
  passive?: {
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
  weaponmaterialtype?: {
    id: number
    name: string
  }
  url: string
}

export type IWeaponMaterialType = {
  id: number
	name: string
	'2starname': string
	'3starname': string
	'4starname': string
	'5starname': string
	day: string[]
	location: string
	region: string
  domainofforgery: string
  images: {
    image: string
  }
}
