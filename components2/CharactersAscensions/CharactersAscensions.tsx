import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import { IRoster, IRosterCharacter } from '../../types'
import api from '../../datas/api'
import { groupCharactersByAscension, getNameTranslation } from '../../utils/character-ascension'
import DashBox from '../DashBox'
import ItemFragment from '../ItemFragment'
import ItemSliver from '../ItemSliver'
import ItemSliverCharacters from '../ItemSliverCharacters'

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
        return (
          <DashBox key={key} title={t(`site.character_ascensions_types.${key}`)} variant="blue" size="xs">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="16px">
              {charactersAscensions[key].map((item) => (
                <Box key={charactersAscensions[key].name}>
                  <DashBox size="md">
                    <ItemFragment
                      image={item.images.image}
                      title={t(getNameTranslation(item))}
                    />
                    {!!item.amounts && <Wrap pt="12px" spacing="24px">
                      {item.amounts.map((amount) => (
                        <WrapItem key={amount.amount}>
                          <ItemSliverCharacters
                            characters={amount.characters}
                            title={`x${amount.amount}`}
                            showCharacter={item.amounts.length < 2}
                          />
                        </WrapItem>
                      ))}
                    </Wrap>}
                    {!!item.droppedBy && <SimpleGrid columns={1} pt="12px" spacing="8px">
                      {item.droppedBy.map((droppedBy) => (
                        <ItemSliver
                          key={droppedBy.name}
                          image={droppedBy.images.image}
                          title={`${t(`bosses.${droppedBy.name}`)}
                          ${droppedBy.level ? droppedBy.level : ''}`}
                        />
                      ))}
                    </SimpleGrid>}
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
