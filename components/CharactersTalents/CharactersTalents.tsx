import React, { useState } from 'react'
import {
  Box,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import uniq from 'lodash.uniq'
import { ICharacter, ITalentMaterialType } from '../../types'
import { getCharacterByName, getTalentMaterialTypeByName } from '../../pages/api'
import AscensionItem from '../AscensionItem'

interface IProps {
  userRosterCharacters: Pick<ICharacter, 'name'>[]
  date: { value: string, label: string }
}

const CharactersTalents = ({ userRosterCharacters, date }: IProps) => {
  const characters = userRosterCharacters.map((character) => getCharacterByName(character.name))
  const talentMaterialTypeNames = characters.map((character) => character.talentmaterialtype)
  const talentMaterialTypes: ITalentMaterialType[] = uniq(talentMaterialTypeNames).map(
    (talentMaterialType) => getTalentMaterialTypeByName(talentMaterialType)
  )
  const dailyTalentMaterialTypes = talentMaterialTypes.filter((talentMaterialType) => talentMaterialType.day.includes(date.value))

  const items = date.value === 'all' ? talentMaterialTypes : dailyTalentMaterialTypes

  if (items?.length === 0) {
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
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 1, xxl: 2 }} spacing={10}>
        {items.map((talentMaterialType, index) => (
          <AscensionItem
            key={index}
            image={talentMaterialType.images.image}
            label={talentMaterialType.name}
            sublabel={talentMaterialType.domainofmastery}
            characters={characters.filter((character) => character.talentmaterialtype === talentMaterialType.name)}
            date={date.value === 'all' && talentMaterialType.day.join(', ')}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default CharactersTalents
