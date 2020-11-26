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
            <Heading mb="16px" fontSize="14px" fontWeight="semibold" lineHeight="1.33333">
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
