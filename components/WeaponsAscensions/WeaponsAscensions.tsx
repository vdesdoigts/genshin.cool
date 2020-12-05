import React from 'react'
import { useTranslation } from 'react-i18next'
import uniq from 'lodash.uniq'
import { useSelector } from 'react-redux'
import { AppSelectors, ProfileSelectors } from '../../redux/selectors'
import { getWeaponMaterialTypeById, getWeaponById } from '../../api'
import DashBox from '../DashBox'
import WeeklyWeaponsMaterials from './WeeklyWeaponsMaterials'
import DailyWeaponsMaterials from './DailyWeaponsMaterials'
import { IWeapon, IWeaponMaterialType } from '../../types'

const WeaponsAscensions = () => {
  const { t } = useTranslation()
  const currentSelectedDay = useSelector(AppSelectors.getCurrentSelectedDay)
  const currentEnabledArmoryWeapons = useSelector(ProfileSelectors.getCurrentEnabledArmoryWeapons)
  const weapons = currentEnabledArmoryWeapons.map((weapon) => getWeaponById(weapon.id)).filter((weapon) => weapon)

  const weaponMaterialTypeIds = weapons.filter((weapon) => weapon.weaponmaterialtype?.id).map((weapon) => weapon.weaponmaterialtype.id)

  const weaponMaterialTypes: (IWeaponMaterialType & { weapons: IWeapon[] })[] = uniq(weaponMaterialTypeIds).map(
    (weaponMaterialType) => ({
      ...getWeaponMaterialTypeById(weaponMaterialType),
      weapons: weapons.filter((weapon) => weapon.weaponmaterialtype.id === weaponMaterialType)
    })
  )
  const dailyWeaponMaterialTypes = weaponMaterialTypes.filter((weaponMaterialType) => weaponMaterialType?.day.includes(currentSelectedDay))

  if ((currentSelectedDay === 'all' && weaponMaterialTypes?.length === 0) || (currentSelectedDay !== 'all' && dailyWeaponMaterialTypes?.length === 0)) {
    return (
      <DashBox title={t('site.weapon_materials')} shadow size="xs">
        <DashBox variant="blue">
          {t('site.weapon_materials_empty')}
        </DashBox>
      </DashBox>
    )
  }

  return (
    <DashBox title={t('site.weapon_materials')} {...(currentSelectedDay === 'all' ? { variant: 'pink', size: 'xs' } : {})} shadow>
      {currentSelectedDay === 'all'
        ? <DashBox size="md"><WeeklyWeaponsMaterials weaponsMaterials={weaponMaterialTypes} /></DashBox>
        : <DailyWeaponsMaterials weaponsMaterials={dailyWeaponMaterialTypes} />
      }
    </DashBox>
  )
}

export default WeaponsAscensions
