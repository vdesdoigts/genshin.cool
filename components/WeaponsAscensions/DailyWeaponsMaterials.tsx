import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { ICharacter, IWeapon, IWeaponMaterialType } from '../../types'
import AscensionItem from '../AscensionItem'

interface IProps {
  weaponsMaterials: { weapon: IWeapon, weaponMaterialType: IWeaponMaterialType, characters: ICharacter[] }[]
}

const DailyWeaponsMaterials = ({ weaponsMaterials }: IProps) => {
  return (
    <SimpleGrid columns={1} spacing={4}>
      {weaponsMaterials.filter((weaponsMaterial) => weaponsMaterial.weaponMaterialType !== undefined).map((weaponMaterial) => (
        <AscensionItem
          key={weaponMaterial.weapon.id}
          image={weaponMaterial.weaponMaterialType.images.image}
          label={weaponMaterial.weaponMaterialType.name}
          sublabel={weaponMaterial.weaponMaterialType.domainofforgery}
          characters={weaponMaterial.characters}
        />
      ))}
    </SimpleGrid>
  )
}

export default DailyWeaponsMaterials
