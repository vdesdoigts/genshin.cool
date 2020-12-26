import React from 'react'
import { useTranslation } from 'react-i18next'
import uniq from 'lodash.uniq'
import { useSelector } from 'react-redux'
import { AppSelectors, ProfileSelectors } from '../../redux/selectors'
import api from '../../api'
import DashBox from '../DashBox'
import DailyWeaponsMaterials from './DailyWeaponsMaterials'
import { IWeapon, IWeaponMaterialType } from '../../types'


const WeaponsAscensions = () => {
  const { t } = useTranslation()
  const currentSelectedDay = useSelector(AppSelectors.getCurrentSelectedDay)
  const currentEnabledArmoryWeapons = useSelector(ProfileSelectors.getCurrentEnabledArmoryWeapons)
  const weapons = currentEnabledArmoryWeapons.map((weapon) => api.getWeaponById(weapon.id)).filter((weapon) => weapon)

  const weaponMaterialTypeIds = weapons.filter((weapon) => weapon.weaponmaterialtype?.id).map((weapon) => weapon.weaponmaterialtype.id)

  const weaponMaterialTypes: (IWeaponMaterialType & { weapons: IWeapon[] })[] = uniq(weaponMaterialTypeIds).map(
    (weaponMaterialType) => ({
      ...api.getWeaponMaterialTypeById(weaponMaterialType),
      weapons: weapons.filter((weapon) => weapon.weaponmaterialtype.id === weaponMaterialType)
    })
  )
  const dailyWeaponMaterialTypes = weaponMaterialTypes.filter((weaponMaterialType) => weaponMaterialType?.day.includes(currentSelectedDay.toLowerCase()))

  return (
    <>
      {(currentSelectedDay === 'all' && weaponMaterialTypes?.length === 0) || (currentSelectedDay !== 'all' && dailyWeaponMaterialTypes?.length === 0)
      ? (
        <DashBox
          {...(currentSelectedDay === 'all' 
            ? { title: t('site.material_types.abyssal_domain_weekly'), variant: 'pink' }
            : { title: t('site.material_types.abyssal_domain_daily'),variant: 'blue' }
          )}
          size="xs"
          shadow
        >
          <DashBox>
            {t('site.weapon_materials_empty')}
          </DashBox>
        </DashBox>
      )
      : currentSelectedDay === 'all'
        ? (
          <DashBox
            {...(currentSelectedDay === 'all' 
              ? { title: t('site.material_types.abyssal_domain_weekly'), variant: 'pink' }
              : { title: t('site.material_types.abyssal_domain_daily'),variant: 'blue' }
            )}
            size="xs"
            shadow
          >
            <DailyWeaponsMaterials weaponsMaterials={weaponMaterialTypes} showDays={true} />
          </DashBox>
        )
        : (
          <DashBox
            {...(currentSelectedDay === 'all' 
              ? { title: t('site.material_types.abyssal_domain_weekly'), variant: 'pink' }
              : { title: t('site.material_types.abyssal_domain_daily'),variant: 'blue' }
            )}
            size="xs"
            shadow
          >
            <DailyWeaponsMaterials weaponsMaterials={dailyWeaponMaterialTypes} />
          </DashBox>
        )
      }
    </>
  )
}

export default WeaponsAscensions
