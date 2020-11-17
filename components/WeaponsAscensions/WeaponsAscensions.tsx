import React from 'react'
import {
  Box,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'
import { ICharacter, IWeapon } from '../../types'
import { getCharacterByName, getWeaponByName, getWeaponMaterialTypeByName } from '../../pages/api'
import AscensionItem from '../AscensionItem'

interface IProps {
  userRosterCharactersWeapons: {
    weapon: Pick<IWeapon, 'name'>,
    characters: Pick<ICharacter, 'name'>[]
  }[]
  date: { value: string, label: string }
}

const CharacterAscension = ({ userRosterCharactersWeapons, date }: IProps) => {
  const weaponMaterialTypes = userRosterCharactersWeapons.map((item) => {
    const weapon = getWeaponByName(item.weapon.name)
    
    return {
      weapon,
      weaponMaterialType: getWeaponMaterialTypeByName(weapon.weaponmaterialtype),
      characters: item.characters.map((character) => getCharacterByName(character.name))
    }
  })

  const dailyWeaponMaterialTypes = weaponMaterialTypes.filter((item) => item.weaponMaterialType?.day.includes(date.value))

  const items = date.value === 'all' ? weaponMaterialTypes : dailyWeaponMaterialTypes

  if (items?.length === 0) {
    return (
      <Heading
        as="h3"
        pb={2}
        fontSize="1.25rem"
        fontWeight="medium"
      >
        No weapon ascension material to farm today
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
        Weapon Ascension Materials
      </Heading>
      <SimpleGrid columns={4} spacing={10}>
        {items.filter((item) => item.weaponMaterialType).map((weaponMaterialType) => (
          <AscensionItem
            image={weaponMaterialType.weaponMaterialType.images.image}
            label={weaponMaterialType.weaponMaterialType.name}
            sublabel={weaponMaterialType.weaponMaterialType.domainofforgery}
            characters={[
              weaponMaterialType.weapon,
              ...weaponMaterialType.characters
            ]}
            date={date.value === 'all' && weaponMaterialType.weaponMaterialType.day.join(', ')}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default CharacterAscension
