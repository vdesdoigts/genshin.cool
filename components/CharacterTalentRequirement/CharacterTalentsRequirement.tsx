import React from 'react'
import { useTranslation } from 'react-i18next'
import { AspectRatio, Box, Heading, Select, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import Image from 'next/image'
import { getCharacterById, getCharacterTalentById } from '../../api'
import { ICharacterAscensionItem, IRosterCharacter } from '../../types'
import DashBox from '../DashBox'
import useRematchDispatch from '../../hooks/useRematch'

const Item = ({ ascension }: { ascension: ICharacterAscensionItem[] }) => (
  <SimpleGrid columns={5} spacing="8px">
    {ascension.map((item, index) => (
      <Box key={`${item.name}${index}`} position="relative">
        <AspectRatio
          ratio={1}
          flex="0 0 1"
          borderRadius="16px"
          background="#f2f4f8"
        >
          <Box width="100%" height="100%" p={2}>
            <Box position="relative" width="100%" height="100%">
              <Image
                src={item.images.image}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Box>
        </AspectRatio>
        <Box
          position="absolute"
          bottom={0}
          right={0}
          mt="8px"
          padding="3px 10px"
          background="rgba(160, 215, 231, 0.85)"
          borderRadius="8px"
          color="#ffffff"
          fontSize="13px"
          fontWeight="600"
          lineHeight="1.38462"
        >
          {item.count}
        </Box>
      </Box>
    ))}
  </SimpleGrid>
)

interface IProps {
  selectedCharacter: IRosterCharacter['character']
}

const CharacterTalentRequirement = ({ selectedCharacter }: IProps) => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const character = getCharacterById(selectedCharacter.id)
  const characterTalent = getCharacterTalentById(character.id)
  const characterTalentLevels = selectedCharacter.talents || [0, 0, 0]

  return (
    <SimpleGrid columns={1} spacing={2}>
      <DashBox title={t('site.next_talent_material')} variant="blue" size="xs">
        <SimpleGrid columns={1} spacing="8px">
          {characterTalent.talents.map((talent, index) => (
            <DashBox key={talent.name} size="md">
              <Wrap align="center" justify="space-between"  mb="16px">
                <WrapItem>
                  <Heading fontSize="14px" fontWeight="semibold" lineHeight="1.33333">
                    {t(`talentnames.${talent.name}`)}
                  </Heading>
                </WrapItem>
                <WrapItem>
                  <Select
                    variant="filled"
                    size="sm"
                    borderRadius="12px"
                    defaultValue={characterTalentLevels[index].toString()}
                    onChange={(e) => dispatch.profile.updateCharacterTalent({ character: character.id, talent: index, value: parseInt(e.currentTarget.value) })}
                  >
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                    <option value="5">6</option>
                    <option value="6">7</option>
                    <option value="7">8</option>
                    <option value="8">9</option>
                  </Select>
                </WrapItem>
              </Wrap>
              <Item key={talent.name} ascension={characterTalent.requirements[characterTalentLevels[index]]} />
            </DashBox>
          ))}
        </SimpleGrid>
      </DashBox>
    </SimpleGrid>
  )
}

export default CharacterTalentRequirement
