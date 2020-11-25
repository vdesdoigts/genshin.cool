import React, { useState } from 'react'
import {
  Box,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'
import { getCharacters } from '../../api'
import ListItem from '../ListItem'
import Title from '../Title'
import { ICharacter } from '../../types'

const CharactersMenu = () => {
  const dispatch = useRematchDispatch()
  const currentRosterCharacters = useSelector(ProfileSelectors.getCurrentRosterCharacters)
  const characters = getCharacters()
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSelect = (id: ICharacter['id']) => {
    dispatch.profile.toggleCharacter(id)
  }

  return (
    <Box pt={4}>
      <Title label="Add characters" />
      <Box pt={2}>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Search characters by name"
          size="lg"
        />
      </Box>

      <SimpleGrid spacing={3} pt={4}>
        {characters.filter((character) => character.name.toUpperCase().indexOf(value.toUpperCase()) > -1).map((item, index) => (
          <ListItem
            key={index}
            image={item.images.image}
            label={item.name}
            onSelect={() => onSelect(item.id)}
            isSelected={currentRosterCharacters.findIndex((character) => character.id === item.id) > -1}
            size="3rem"
            imgContainerProps={{ py: 0 }}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default CharactersMenu
