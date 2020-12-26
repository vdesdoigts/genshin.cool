import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { AppSelectors } from '../../redux/selectors'
import api from '../../api'
import { groupCharactersByTalent } from '../../utils/character-talent'
import { getNameTranslation } from '../../utils/character-ascension'
import DashBox from '../DashBox'
import ItemFragment from '../ItemFragment'
import ItemStack from '../ItemStack'
import DailyTalentsMaterials from './DailyTalentsMaterials'

const keys = ['bosses', 'common', 'events']

const CharactersTalents = ({ currentRoster }) => {
  const { t } = useTranslation()
  const currentSelectedDay = useSelector(AppSelectors.getCurrentSelectedDay)
  const characters = api.getCharacterByIds(currentRoster.map((roster) => roster.character.id), {
    withTalents: true,
  })

  const charactersTalents = groupCharactersByTalent(characters, currentRoster)
  const dailyCharactersTalentBooks = charactersTalents.books.filter((book) => book?.day.includes(currentSelectedDay.toLowerCase()))

  return (
    <>
      {(currentSelectedDay === 'all' && charactersTalents.books?.length === 0) || (currentSelectedDay !== 'all' && dailyCharactersTalentBooks?.length === 0)
       ? (
        <DashBox
          {...(currentSelectedDay === 'all' 
            ? { title: t('site.material_types.abyssal_domain_weekly'), variant: 'pink' }
            : { title: t('site.material_types.abyssal_domain_daily'),variant: 'blue' }
          )}
          size="xs"
          shadow
        >
          <DashBox>
            {t('site.character_materials_empty')}
          </DashBox>
        </DashBox>
       )
       : currentSelectedDay === 'all'
        ? (
          <DashBox
            {...(currentSelectedDay === 'all' 
              ? { title: t('site.material_types.abyssal_domain_weekly'), variant: 'pink' }
              : { title: t('site.material_types.abyssal_domain_daily'),variant: 'blue' }
            )}
            size="xs"
            shadow
          >
            <DailyTalentsMaterials talentsMaterials={charactersTalents.books} showDays={true} />
          </DashBox>
        )
        : (
          <DashBox
            {...(currentSelectedDay === 'all' 
              ? { title: t('site.material_types.abyssal_domain_weekly'), variant: 'pink' }
              : { title: t('site.material_types.abyssal_domain_daily'),variant: 'blue' }
            )}
            size="xs"
            shadow
          >
            <DailyTalentsMaterials talentsMaterials={dailyCharactersTalentBooks} />
          </DashBox>
        )
      }
      {[charactersTalents.bosses, charactersTalents.common, charactersTalents.events].map((talent, index) => {
        if (talent.length === 0) {
          return null
        }

        return (
          <DashBox key={keys[index]} title={t(`site.material_types.${keys[index]}`)} variant="pink" size="xs">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="16px">
              {talent.map((item) => (
                <Box key={item.name}>
                  <DashBox size="md">
                    <ItemFragment
                      image={item.images.image}
                      title={t(getNameTranslation(item))}
                    />
                    {!!item.amounts && <Wrap pt="12px" spacing="8px">
                      {item.amounts.map((amount) => (
                        <WrapItem key={amount.amount}>
                          <ItemStack
                            items={amount.characters}
                            title={`x${amount.amount}`}
                            showFullText={amount.characters.length < 3}
                          />
                        </WrapItem>
                      ))}
                    </Wrap>}
                    {!!item.droppedBy && <Box pt="8px">
                      <ItemStack
                        items={item.droppedBy}
                        itemsTranslationPrefix="bosses"
                        title={item.droppedBy[0].level ? `${item.droppedBy[0].level}+` : 'B'}
                        showFullText={item.droppedBy.length < 2}
                      />
                    </Box>}
                  </DashBox>
                </Box>
              ))}
            </SimpleGrid>
          </DashBox>
        )
      })}
    </>
  )
}

export default CharactersTalents
