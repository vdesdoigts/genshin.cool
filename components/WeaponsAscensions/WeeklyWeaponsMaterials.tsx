import React from 'react'
import groupBy from 'lodash.groupby'
import {
  Box,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import { ICharacter, IWeapon, IWeaponMaterialType } from '../../types'
import DailyWeaponsMaterials from './DailyWeaponsMaterials'

interface IProps {
  weaponsMaterials: { weapon: IWeapon, weaponMaterialType: IWeaponMaterialType, characters: ICharacter[] }[]
}

const WeeklyWeaponsMaterials = ({ weaponsMaterials }: IProps) => {
  const weaponMaterialTypesByDays = groupBy(weaponsMaterials.filter((weaponsMaterial) => weaponsMaterial.weaponMaterialType !== undefined), (weaponsMaterial) => weaponsMaterial.weaponMaterialType.day)

  return (
    <SimpleGrid columns={1} spacing={12}>
      {Object.keys(weaponMaterialTypesByDays).map((key) => {
        return (
          <Box>
            <Heading mb="16px" fontSize="14px" fontWeight="semibold" lineHeight="1.33333">
              {key.split(',').join(', ')}
            </Heading>
            <DailyWeaponsMaterials weaponsMaterials={weaponMaterialTypesByDays[key]} />
          </Box>
        )
      })}
    </SimpleGrid>
  )
}

export default WeeklyWeaponsMaterials
