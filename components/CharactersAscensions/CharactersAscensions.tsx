import React from 'react'
import uniqBy from 'lodash.uniqby'
import {
  AspectRatio,
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

  return (
    <DashBox title="Character ascensions" variant="pink" size="sm">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="16px">
        {ascensionMaterialsWithCharacters.map((ascensionMaterial, index) => (
          <DashBox key={index}>
            <AscensionItem
              image={ascensionMaterial.images.image}
              label={ascensionMaterial.name}
              characters={ascensionMaterial.characters}
            />
            <SimpleGrid columns={1} pt="12px" spacing="8px">
              {ascensionMaterial.droppedby.map((droppedby) => (
                <HStack spacing="8px">
                  {droppedby.images?.image && <AspectRatio
                    ratio={1}
                    overflow="hidden"
                    flex="0 0 32px"
                    width="32px"
                    height="32px"
                    borderRadius="8px"
                    background="#f2f4f8"
                  >
                    <Image
                      src={droppedby.images.image}
                      width="100%"
                      height="100%"
                      objectFit="contain"
                    />
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
                      {droppedby.name}
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
