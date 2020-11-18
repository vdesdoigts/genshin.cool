import React, { useState } from 'react'
import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { ICharacter, IWeapon } from '../../types'
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
          <Heading id="schedule" size="lg" fontWeight="semibold">Schedule</Heading>
          <Box flex="0 0 12.5rem">
            <Select
              instanceId="day"
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
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={4}>
        <Box>
          <Heading
            as="h3"
            pb={2}
            fontSize="1.25rem"
            fontWeight="medium"
          >
            Character Talents Materials
          </Heading>
          <Box
            px={{ base: 8, md: 10 }}
            py={{ base: 6 }}
            borderRadius="md"
            boxShadow="lg"
            background="#fff"
          >
            <Box width="100%">
              <CharactersTalents
                userRosterCharacters={userRosterCharacters}
                date={date}
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Heading
            as="h3"
            pb={2}
            fontSize="1.25rem"
            fontWeight="medium"
          >
            Weapon Ascension Materials
          </Heading>
          <Box
            px={{ base: 8, md: 10 }}
            py={{ base: 6 }}
            borderRadius="md"
            boxShadow="lg"
            background="#fff"
          >
            <Box width="100%">
              <WeaponsAscensions
                userRosterCharactersWeapons={userRosterCharactersWeapons}
                date={date}
              />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  )
}

export default Schedule
