import React from 'react'
import { useTranslation } from 'react-i18next'
import { SimpleGrid } from '@chakra-ui/react'
import { IWeapon, IWeaponMaterialType } from '../../types'
import AscensionItem from './AscensionItem'

interface IProps {
  weaponsMaterials: (IWeaponMaterialType & { weapons: IWeapon[] })[]
}

const DailyWeaponsMaterials = ({ weaponsMaterials }: IProps) => {
  const { t } = useTranslation()

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="16px">
      {weaponsMaterials.map((weaponsMaterial) => (
        <AscensionItem
          key={weaponsMaterial.id}
          image={weaponsMaterial.images.image}
          label={t(`weaponmaterialtypes.${weaponsMaterial.name}`)}
          sublabel={t(`domainofforgeries.${weaponsMaterial.domainofforgery}`)}
          characters={weaponsMaterial.weapons}
        />
      ))}
    </SimpleGrid>
  )
}

export default DailyWeaponsMaterials
