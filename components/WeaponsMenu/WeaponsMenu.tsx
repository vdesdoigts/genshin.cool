import React, { useState } from 'react'
import {
  Box,
  Heading,
  Input,
  SimpleGrid,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ProfileSelectors } from '../../redux/selectors'
import { ICharacter, IWeapon } from '../../types'
import { getWeaponsByType } from '../../api'
import ListItem from '../ListItem'

interface IProps {
  character?: ICharacter
  onSelect: (characterName: ICharacter['id'], weapon: IWeapon['id']) => void
}

const WeaponsMenu = ({ character, onSelect }: IProps) => {

  if (!character) {
    return null
  }

  const rosterCharacter = useSelector((state) => ProfileSelectors.getRosterCharacterById(state, character.id))
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Box pt={4}>
      <Heading mb="12px" fontSize="18px" fontWeight="medium" lineHeight="1.33333">Select {character.name}'s weapon</Heading>
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
              isSelected={rosterCharacter.weapon?.id === item.id}
              size="3rem"
              imgContainerProps={{ py: 0 }}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default WeaponsMenu
