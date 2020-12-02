import React from 'react'
import { useTranslation } from 'react-i18next'
import groupBy from 'lodash.groupby'
import {
  Box,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import { IWeapon, IWeaponMaterialType } from '../../types'
import DailyWeaponsMaterials from './DailyWeaponsMaterials'

interface IProps {
  weaponsMaterials: (IWeaponMaterialType & { weapons: IWeapon[] })[]
}

const WeeklyWeaponsMaterials = ({ weaponsMaterials }: IProps) => {
  const { t } = useTranslation()
  const weaponsMaterialsByDays = groupBy(weaponsMaterials, (item) => item.day)

  return (
    <SimpleGrid columns={1} spacing={12}>
      {Object.keys(weaponsMaterialsByDays).map((key) => {
        return (
          <Box>
            <Heading mb="16px" fontSize="14px" fontWeight="semibold" lineHeight="1.33333">
              {t(`site.days.${key.split(',').join(', ')}`)}
            </Heading>
            <DailyWeaponsMaterials weaponsMaterials={weaponsMaterialsByDays[key]} />
          </Box>
        )
      })}
    </SimpleGrid>
  )
}

export default WeeklyWeaponsMaterials
