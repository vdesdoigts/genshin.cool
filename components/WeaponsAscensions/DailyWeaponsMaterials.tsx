import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { ICharacter, IWeapon, IWeaponMaterialType } from '../../types'
import AscensionItem from '../AscensionItem'

interface IProps {
  weaponsMaterials: (IWeaponMaterialType & { weapons: IWeapon[] })[]
}

const DailyWeaponsMaterials = ({ weaponsMaterials }: IProps) => {
  return (
    <SimpleGrid columns={1} spacing={4}>
      {weaponsMaterials.map((weaponsMaterial) => (
        <AscensionItem
          key={weaponsMaterial.id}
          image={weaponsMaterial.images.image}
          label={weaponsMaterial.name}
          sublabel={weaponsMaterial.domainofforgery}
          characters={weaponsMaterial.weapons}
        />
      ))}
    </SimpleGrid>
  )
}

export default DailyWeaponsMaterials
