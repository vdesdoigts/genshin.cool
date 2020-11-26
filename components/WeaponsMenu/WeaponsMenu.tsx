import React, { useState } from 'react'
import {
  Box,
  Input,
  SimpleGrid,
} from '@chakra-ui/react'
import { ICharacter, IWeapon } from '../../types'
import { getWeaponsByType } from '../../api'
import ListItem from '../ListItem'
import Title from '../Title'

interface IProps {
  character?: ICharacter
  onSelect: (characterName: ICharacter['id'], weapon: IWeapon['id']) => void
}

const WeaponsMenu = ({ character, onSelect }: IProps) => {
  if (!character) {
    return null
  }

  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Box pt={4}>
      <Title label={`Select ${character.name}'s weapon`} />
      <Box pt={2}>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Search weapons by name"
          size="lg"
        />
      </Box>
      <Box pt={4}>
        <SimpleGrid spacing={3}>
          {getWeaponsByType(character.weapontype).filter((weapon) => weapon.name.toUpperCase().indexOf(value.toUpperCase()) > -1).map((item, index) => (
            <ListItem
              key={index}
              image={item.images.image}
              label={item.name}
              onSelect={() => onSelect(character.id, item.id)}
              // isSelected={userRosterWeaponCharacter.name === item.name}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default WeaponsMenu
