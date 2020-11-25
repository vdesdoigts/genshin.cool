import React from 'react'
import groupBy from 'lodash.groupby'
import {
  Box,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import { ICharacter, ITalentMaterialType } from '../../types'
import DailyTalentsMaterials from './DailyTalentsMaterials'

interface IProps {
  talentsMaterials: (ITalentMaterialType & { characters: ICharacter[] })[]
}

const WeeklyTalentsMaterials = ({ talentsMaterials }: IProps) => {
  const talentMaterialTypesByDays = groupBy(talentsMaterials, (item) => item.day)

  return (
    <SimpleGrid columns={1} spacing={12}>
      {Object.keys(talentMaterialTypesByDays).map((key) => {
        return (
          <Box>
            <Heading
              pb={4}
              color="#4b4d55"
              fontSize="1rem"
              fontWeight="light"
              lineHeight="1"
              _after={{
                content: "''",
                display: "block",
                width: "100%",
                height: '1px',
                mt: ".75rem",
                background: '#eef0f4',
              }}
            >
              {key.split(',').join(', ')}
            </Heading>
            <DailyTalentsMaterials talentsMaterials={talentMaterialTypesByDays[key]} />
          </Box>
        )
      })}
    </SimpleGrid>
  )
}

export default WeeklyTalentsMaterials
