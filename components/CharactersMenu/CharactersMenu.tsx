import React, { useState } from 'react'
import {
  Box,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RosterSelectors } from '../../redux/selectors'
import characters from '../../data/characters'
import { ICharacter, IArtifactItem, IArtifactType } from '../../types'
import ListItem from '../ListItem'
import Title from '../Title'

interface IProps {
  onSelect: (characterName: ICharacter['name']) => void
}

const CharactersMenu = ({ onSelect }: IProps) => {
  const userRosterCharacters = useSelector(RosterSelectors.getUserRosterCharacters)
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
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
            onSelect={() => onSelect(item.name)}
            isSelected={userRosterCharacters.findIndex((character) => character.name === item.name) > -1}
            size="3rem"
            imgContainerProps={{ py: 0 }}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default CharactersMenu
