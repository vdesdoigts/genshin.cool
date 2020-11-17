import React, { useState } from 'react'
import {
  Box,
  Divider,
  Stack,
  VStack,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { ICharacter, IWeapon } from '../../types'
import { getCharacterByName } from '../../pages/api'
import CharactersTalents from '../CharactersTalents'
import Header from '../Header'
import Select from '../Select'
import WeaponsAscensions from '../WeaponsAscensions'

interface IProps {
  userRosterCharacters: Pick<ICharacter, 'name'>[]
  userRosterCharactersWeapons: {
    weapon: Pick<IWeapon, 'name'>,
    characters: Pick<ICharacter, 'name'>[]
  }[]
}

const Schedule = ({ userRosterCharacters, userRosterCharactersWeapons }: IProps) => {
  const options = [
    { value: 'all', label: 'Week' },
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Statuday', label: 'Statuday' },
    { value: 'Sunday', label: 'Sunday' },
  ]
  const currentDay = format(new Date(), 'EEEE')
  const [date, setDate] = useState<{ value: string, label: string }>(options.find((option) => option.value === currentDay))
  
  return (
    <>
      <Box pt={10} pb={4}>
        <Stack direction="row" spacing={4}>
          <Header title="Schedule" />
          <Box flex="0 0 12.5rem">
            <Select
              defaultValue={date}
              name="color"
              options={options}
              value={date}
              // @ts-ignore
              onChange={value => setDate(value)}
            />
          </Box>
        </Stack>
      </Box>
      <Box
        px={10}
        py={6}
        borderRadius="md"
        boxShadow="lg"
        background="#fff"
      >
        <VStack
          width="100%"
          spacing={8}
          divider={<Divider key={0} borderColor="gray.200" />}
        >
          <Box width="100%">
            <CharactersTalents
              userRosterCharacters={userRosterCharacters}
              date={date}
            />
          </Box>
          {/* <Box width="100%">
            <CharactersAscensions
              userRosterCharacters={userRosterCharacters}
              date={date}
            />
          </Box> */}
          <Box width="100%">
            <WeaponsAscensions
              userRosterCharactersWeapons={userRosterCharactersWeapons}
              date={date}
            />
          </Box>
        </VStack>
      </Box>
    </>
  )
}

export default Schedule
