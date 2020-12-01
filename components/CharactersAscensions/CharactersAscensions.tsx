import React from 'react'
import { useTranslation } from 'react-i18next'
import uniqBy from 'lodash.uniqby'
import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ProfileSelectors } from '../../redux/selectors'
import { getAscensionMaterialsByTypesAndAscension, getCharacterById } from '../../api'
import AscensionItem from '../AscensionItem'
import DashBox from '../DashBox'
import { IAscensionMaterial, ICharacter } from '../../types'

const CharactersAscensions = () => {
  const { t } = useTranslation()
  const currentRosterCharacters = useSelector(ProfileSelectors.getCurrentEnabledRosterCharacters)
  const characters = currentRosterCharacters.map((character) => getCharacterById(character.id))

  const ascensionMaterials = uniqBy(currentRosterCharacters.map((character, index) => 
    getAscensionMaterialsByTypesAndAscension(characters[index].ascensionmaterials.map((ascensionmaterial) =>
      ascensionmaterial.id).flat(), character.ascension)).flat(), 'id').sort(function (a, b) {
        if (a.type.id === b.type.id) {
          return a.rarity - b.rarity
        } else {
          return a.type.id - b.type.id
        }
      });

  const ascensionMaterialsWithCharacters: (IAscensionMaterial & { characters: ICharacter[] })[] = ascensionMaterials.map((ascensionMaterial) => ({
    ...ascensionMaterial,
    characters: currentRosterCharacters.filter((character) => 
      ascensionMaterial.ascensions.includes(character.ascension || 1) && ascensionMaterial.characters.includes(character.id))
      .map((rosterCharacter) => characters.find((character) => character.id === rosterCharacter.id))
  }))

  if (ascensionMaterialsWithCharacters.length === 0) {
    return (
      <DashBox title="Character ascensions" variant="pink" shadow size="sm">
        <DashBox>
          No character in your roster.
        </DashBox>
      </DashBox>
    )
  }

  return (
    <DashBox title="Character ascensions" variant="pink" size="sm">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="16px">
        {ascensionMaterialsWithCharacters.map((ascensionMaterial) => (
          <DashBox key={ascensionMaterial.name}>
            <AscensionItem
              image={ascensionMaterial.images.image}
              label={t(`ascensionmaterials.${ascensionMaterial.name}`)}
              characters={ascensionMaterial.characters}
            />
            <SimpleGrid columns={1} pt="12px" spacing="8px">
              {ascensionMaterial.droppedby.map((droppedby) => (
                <HStack key={droppedby.name} spacing="8px">
                  {droppedby.images?.image && <AspectRatio
                    ratio={1}
                    overflow="hidden"
                    flex="0 0 32px"
                    width="32px"
                    height="32px"
                    borderRadius="8px"
                    background="#f2f4f8"
                  >
                    <Box position="relative" width="100%" height="100%">
                      <Image
                        src={droppedby.images.image}
                        // @ts-ignore
                        layout="fill"
                        objectFit="contain"
                      />
                    </Box>
                  </AspectRatio>}
                  <Flex
                    align="center"
                    flex="1 1 auto"
                    alignSelf="stretch"
                    minH="32px"
                    px={4}
                    borderRadius=".5rem"
                    background="#f2f4f8"
                  >
                    <Text
                      mb="3px"
                      fontSize="14px"
                      lineHeight="1.1875"
                      fontWeight="500"
                    >
                      {t(`bosses.${droppedby.name}`)}
                    </Text>
                  </Flex>
                </HStack>
              ))}
            </SimpleGrid>
          </DashBox>
        ))}
      </SimpleGrid>
    </DashBox>
  )
}

export default CharactersAscensions
