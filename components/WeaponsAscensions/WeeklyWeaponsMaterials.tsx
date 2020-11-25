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
            <Heading
              pb={4}
              color="#4b4d55"
              fontSize="1rem"
              fontWeight="light"
              lineHeight="1"
              _after={{
                content: "''",
                display: "block",
                width: "100%",
                height: '1px',
                mt: ".75rem",
                background: '#eef0f4',
              }}
            >
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
