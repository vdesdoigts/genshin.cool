import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import { IRoster } from '../../types'
import api from '../../datas/api'
import { groupCharactersByAscension, getNameTranslation } from '../../utils/character-ascension'
import DashBox from '../DashBox'
import ItemFragment from '../ItemFragment'
import ItemStack from '../ItemStack'

interface IProps {
  currentRoster: IRoster
}

const CharactersAscensions = ({ currentRoster }: IProps) => {
  const { t } = useTranslation()
  const characters = api.getCharacterByIds(currentRoster.map((roster) => roster.character.id), {
    withAscension: true,
  })

  const charactersAscensions = groupCharactersByAscension(characters, currentRoster)

  return (
    <>
      {Object.keys(charactersAscensions).map((key) => {

        if (charactersAscensions[key].length === 0) {
          return null
        }

        return (
          <DashBox key={key} title={t(`site.material_types.${key}`)} variant="pink" size="xs">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="16px">
              {charactersAscensions[key].map((item) => (
                <Box key={charactersAscensions[key].name}>
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

export default CharactersAscensions
