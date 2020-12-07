import React from 'react'
import { useTranslation } from 'react-i18next'
import { AspectRatio, Box, Tooltip, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import Image from 'next/image'
import { getCharacterById, getCharacterascensionById } from '../../api'
import { ICharacterAscensionItem, IRosterCharacter } from '../../types'
import DashBox from '../DashBox'

const Item = ({ ascension }: { ascension: ICharacterAscensionItem[] }) => {
  const { t } = useTranslation()

  return (
    <DashBox size="xs" shadow>
      <SimpleGrid columns={5} spacing="8px">
        {ascension.map((item, index) => (
          <Tooltip
            key={`${item.name}${index}`}
            label={t(`ascensionmaterials.${item.name}`)}
            placement="bottom-start"
            openDelay={300}
            borderRadius="8px"
            bg="#fff"
            px={4}
            py={2}
            color="#11142D"
          >
            <Box position="relative">
              <AspectRatio
                ratio={1}
                flex="0 0 1"
                borderRadius="16px"
                bg="#f2f4f8"
              >
                <Box width="100%" height="100%" p={2}>
                  <Box position="relative" width="100%" height="100%">
                    <Image
                      src={item.images.image}
                      layout="fill"
                      objectFit="contain"
                      loading="eager"
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
          </Tooltip>
        ))}
      </SimpleGrid>
    </DashBox>
  )
}

interface IProps {
  selectedCharacter: IRosterCharacter['character']
}

const CharacterAscensionRequirement = ({ selectedCharacter }: IProps) => {
  const { t } = useTranslation()
  const character = getCharacterById(selectedCharacter.id)
  const characterascension = getCharacterascensionById(character.id)

  return (
    <SimpleGrid columns={1} spacing={2}>
      <DashBox title={t('site.next_ascension_material')} variant="blue" size="xs">
        {selectedCharacter.ascension === 6
          ? (
            <DashBox>
              {t('site.next_ascension_material_max')}
            </DashBox>
          )
          : (
            <SimpleGrid columns={1} spacing="8px">
              {characterascension?.requirements.filter((requirement, index) => index >= (selectedCharacter.ascension || 0)).map((ascension, index) => (
                <Item key={`${characterascension.id}${index}`} ascension={ascension} />
              ))}
            </SimpleGrid>
          )
        }
      </DashBox>
    </SimpleGrid>
  )
}

export default CharacterAscensionRequirement
