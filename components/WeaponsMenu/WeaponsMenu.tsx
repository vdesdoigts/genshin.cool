import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Heading,
  Input,
  SimpleGrid,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'
import { getWeapons } from '../../api'
import ListItem from '../ListItem'
import { IWeapon } from '../../types'

const WeaponsMenu = () => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const currentArmoryWeapons = useSelector(ProfileSelectors.getCurrentArmoryWeapons)
  const weapons = getWeapons()
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSelect = (id: IWeapon['id']) => {
    dispatch.profile.toggleWeapon(id)
  }

  return (
    <Box py={4}>
      <Heading mb="12px" fontSize="18px" fontWeight="medium" lineHeight="1.33333">Manage your armory</Heading>
      <Box pt={2}>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Search characters by name or type"
          size="lg"
        />
      </Box>

      <SimpleGrid spacing={3} pt={4}>
        {weapons.filter((weapon) => weapon.name.toUpperCase().indexOf(value.toUpperCase()) > -1 || weapon.weapontype.toUpperCase().indexOf(value.toUpperCase()) > -1).map((item) => (
          <ListItem
            key={item.id}
            image={item.images.image}
            label={t(`weapons.${item.name}`)}
            onSelect={() => onSelect(item.id)}
            isSelected={currentArmoryWeapons.findIndex((weapon) => weapon.id === item.id) > -1}
            size="3rem"
            imgContainerProps={{ py: 0 }}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default WeaponsMenu
