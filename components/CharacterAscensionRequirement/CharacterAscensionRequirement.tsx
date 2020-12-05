import React from 'react'
import { useTranslation } from 'react-i18next'
import { AspectRatio, Box, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import Image from 'next/image'
import { getCharacterById, getCharacterascensionById } from '../../api'
import { ICharacterAscensionItem, IRosterCharacter } from '../../types'
import DashBox from '../DashBox'

const Item = ({ ascension }: { ascension: ICharacterAscensionItem[] }) => (
  <DashBox size="xs" shadow>
    <Wrap spacing="8px" wrap="wrap" isInline>
      {ascension.map((item, index) => (
        <WrapItem key={index} position="relative">
          <AspectRatio
            ratio={1}
            flex="0 0 72px"
            width="72px"
            height="72px"
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
        </WrapItem>
      ))}
    </Wrap>
  </DashBox>
)

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
                <Item key={index} ascension={ascension} />
              ))}
            </SimpleGrid>
          )
        }
      </DashBox>
      {/* <DashBox title="Total ascension material" variant="transparent" size="xs">
        <SimpleGrid columns={1} spacing="16px">
          <Item ascension={ascension} />
        </SimpleGrid>
      </DashBox> */}
    </SimpleGrid>
  )
}

export default CharacterAscensionRequirement
