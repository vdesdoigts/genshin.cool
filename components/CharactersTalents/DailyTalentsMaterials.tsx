import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { ICharacter, ITalentMaterialType } from '../../types'
import AscensionItem from '../AscensionItem'

interface IProps {
  talentsMaterials: (ITalentMaterialType & { characters: ICharacter[] })[]
}

const DailyTalentsMaterials = ({ talentsMaterials }: IProps) => {
  return (
    <SimpleGrid columns={1} spacing={4}>
      {talentsMaterials.map((talentMaterialType) => (
        <AscensionItem
          key={talentMaterialType.id}
          image={talentMaterialType.images.image}
          label={talentMaterialType.name}
          sublabel={talentMaterialType.domainofmastery}
          characters={talentMaterialType.characters}
        />
      ))}
    </SimpleGrid>
  )
}

export default DailyTalentsMaterials
