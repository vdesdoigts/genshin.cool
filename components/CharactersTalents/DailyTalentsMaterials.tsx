import React from 'react'
import { useTranslation } from 'react-i18next'
import { SimpleGrid } from '@chakra-ui/react'
import { ICharacter, ITalentMaterialType } from '../../types'
import AscensionItem from '../AscensionItem'

interface IProps {
  talentsMaterials: (ITalentMaterialType & { characters: ICharacter[] })[]
}

const DailyTalentsMaterials = ({ talentsMaterials }: IProps) => {
  const { t } = useTranslation()

  return (
    <SimpleGrid columns={1} spacing={4}>
      {talentsMaterials.map((talentMaterialType) => (
        <AscensionItem
          key={talentMaterialType.name}
          image={talentMaterialType.images.image}
          label={t(`talentmaterialtypes.${talentMaterialType.name}`)}
          sublabel={t(`domainofmasteries.${talentMaterialType.domainofmastery}`)}
          characters={talentMaterialType.characters}
        />
      ))}
    </SimpleGrid>
  )
}

export default DailyTalentsMaterials
