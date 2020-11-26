import React from 'react'
import groupBy from 'lodash.groupby'
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { AppSelectors, ProfileSelectors } from '../../redux/selectors'
import { getCharacterById, getWeaponMaterialTypeById, getWeaponById } from '../../api'
import DashBox from '../DashBox'
import WeeklyWeaponsMaterials from './WeeklyWeaponsMaterials'
import DailyWeaponsMaterials from './DailyWeaponsMaterials'
import { ICharacter, IWeapon, IWeaponMaterialType } from '../../types'

const WeaponsAscensions = () => {
  const currentSelectedDay = useSelector(AppSelectors.getCurrentSelectedDay)
  const currentEnabledRoster = useSelector(ProfileSelectors.getCurrentEnabledRoster)
  const weaponMaterialTypesByWeaponId = groupBy(currentEnabledRoster, (roster) => roster.weapon?.id)

  const weaponMaterialTypes: { weapon: IWeapon, weaponMaterialType: IWeaponMaterialType, characters: ICharacter[] }[] = 
    Object.keys(weaponMaterialTypesByWeaponId)
      .filter((weaponKey) => weaponKey !== 'undefined')
      .map((weaponKey) => {
        const roster = weaponMaterialTypesByWeaponId[weaponKey]
        const weapon = getWeaponById(roster[0].weapon.id) // same for all character 
        const characters = roster.map((item) => item.character.id)
        
        return {
          weapon,
          weaponMaterialType: getWeaponMaterialTypeById(weapon.weaponmaterialtype.id),
          characters: characters.map((character) => getCharacterById(character))
        }
      })

  const dailyWeaponMaterialTypes = weaponMaterialTypes.filter((item) => item.weaponMaterialType?.day.includes(currentSelectedDay))

  if ((currentSelectedDay === 'all' && weaponMaterialTypes?.length === 0) || (currentSelectedDay !== 'all' && dailyWeaponMaterialTypes?.length === 0)) {
    return (
      <DashBox title="Weapon Materials">
        <Text mb={0}>
          No weapon material to farm today.
        </Text>
      </DashBox>
    )
  }

  return (
    <DashBox title="Weapon Materials" {...(currentSelectedDay === 'all' ? { variant: 'pink', size: 'sm' } : {})} shadow>
      {currentSelectedDay === 'all'
        ? <DashBox><WeeklyWeaponsMaterials weaponsMaterials={weaponMaterialTypes} /></DashBox>
        : <DailyWeaponsMaterials weaponsMaterials={dailyWeaponMaterialTypes} />
      }
    </DashBox>
  )
}

export default WeaponsAscensions
