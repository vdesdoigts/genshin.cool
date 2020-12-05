import React from 'react'
import { useTranslation } from 'react-i18next'
import uniq from 'lodash.uniq'
import { useSelector } from 'react-redux'
import { AppSelectors, ProfileSelectors } from '../../redux/selectors'
import { ICharacter, ITalentMaterialType } from '../../types'
import { getCharacterById, getTalentMaterialTypeById } from '../../api'
import DashBox from '../DashBox'
import DailyTalentsMaterials from './DailyTalentsMaterials'
import WeeklyTalentsMaterials from './WeeklyTalentsMaterials'

const CharactersTalents = () => {
  const { t } = useTranslation()
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
      <DashBox title={t('site.character_materials')} shadow size="sm">
        <DashBox variant="blue">
          {t('site.character_materials_empty')}
        </DashBox>
      </DashBox>
    )
  }

  return (
    <DashBox title={t('site.character_materials')} {...(currentSelectedDay === 'all' ? { variant: 'pink', size: 'xs' } : {})} shadow>
      {currentSelectedDay === 'all'
        ? <DashBox size="md"><WeeklyTalentsMaterials talentsMaterials={talentMaterialTypes} /></DashBox>
        : <DailyTalentsMaterials talentsMaterials={dailyTalentMaterialTypes} />
      }
    </DashBox>
    
  )
}

export default CharactersTalents
