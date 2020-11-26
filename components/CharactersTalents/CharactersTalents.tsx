import React, { useState } from 'react'
import uniq from 'lodash.uniq'
import {
  Box,
  Heading,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { AppSelectors, ProfileSelectors } from '../../redux/selectors'
import { ICharacter, ITalentMaterialType } from '../../types'
import { getCharacterById, getTalentMaterialTypeById } from '../../api'
import DashBox from '../DashBox'
import DailyTalentsMaterials from './DailyTalentsMaterials'
import WeeklyTalentsMaterials from './WeeklyTalentsMaterials'

const CharactersTalents = () => {
  const currentSelectedDay = useSelector(AppSelectors.getCurrentSelectedDay)
  const currentRosterCharacters = useSelector(ProfileSelectors.getCurrentEnabledRosterCharacters)
  const characters = currentRosterCharacters.map((character) => getCharacterById(character.id))

  const talentMaterialTypeIds = characters.map((character) => character.talentmaterialtype.id)

  const talentMaterialTypes: (ITalentMaterialType & { characters: ICharacter[] })[] = uniq(talentMaterialTypeIds).map(
    (talentMaterialType) => ({
      ...getTalentMaterialTypeById(talentMaterialType),
      characters: characters.filter((character) => character.talentmaterialtype.id === talentMaterialType)
    })
  )
  const dailyTalentMaterialTypes = talentMaterialTypes.filter((talentMaterialType) => talentMaterialType?.day.includes(currentSelectedDay))

  if ((currentSelectedDay === 'all' && talentMaterialTypes?.length === 0) || (currentSelectedDay !== 'all' && dailyTalentMaterialTypes?.length === 0)) {
    return (
      <Heading
        as="h3"
        pb={2}
        fontSize="1.25rem"
        fontWeight="medium"
      >
        No talent material to farm today
      </Heading>
    )
  }

  return (
    <DashBox title="Character materials" {...(currentSelectedDay === 'all' ? { variant: 'pink', size: 'sm' } : {})} shadow>
      {currentSelectedDay === 'all'
        ? <DashBox><WeeklyTalentsMaterials talentsMaterials={talentMaterialTypes} /></DashBox>
        : <DailyTalentsMaterials talentsMaterials={dailyTalentMaterialTypes} />
      }
    </DashBox>
    
  )
}

export default CharactersTalents
