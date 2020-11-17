import React from 'react'
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

const CharacterAscension = ({ userRosterCharacters, date }: IProps) => {
  const characters = userRosterCharacters.map((character) => getCharacterByName(character.name))
  const talentMaterialTypeNames = characters.map((character) => character.talentmaterialtype)
  const talentMaterialTypes: ITalentMaterialType[] = uniq(talentMaterialTypeNames).map(
    (talentMaterialType) => getTalentMaterialTypeByName(talentMaterialType)
  )
  const dailyTalentMaterialTypes = talentMaterialTypes.filter((talentMaterialType) => talentMaterialType.day.includes(date.value))

  if (dailyTalentMaterialTypes?.length === 0) {
    return (
      <Heading
        as="h3"
        pb={2}
        fontSize="1.25rem"
        fontWeight="medium"
      >
        No ascension material to farm
      </Heading>
    )
  }

  return (
    <Box>
      <Heading
        as="h3"
        pb={2}
        fontSize="1.25rem"
        fontWeight="medium"
      >
        Character ascension
      </Heading>
      <SimpleGrid columns={4} spacing={10}>
        {dailyTalentMaterialTypes.map((talentMaterialType) => (
          <AscensionItem
            image={talentMaterialType.images.image}
            label={talentMaterialType.name}
            sublabel={talentMaterialType.domainofmastery}
            characters={characters.filter((character) => character.talentmaterialtype === talentMaterialType.name)}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default CharacterAscension
