import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Heading, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import { getNameTranslation } from '../../utils/character-ascension'
import DashBox from '../DashBox'
import ItemFragment from '../ItemFragment'
import ItemStack from '../ItemStack'
import ItemSliver from './ItemSliver'

interface IProps {
  weaponsMaterials: any
  showDays?: boolean
}

const DailyWeaponsMaterials = ({ weaponsMaterials, showDays }: IProps) => {
  const { t } = useTranslation()

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="16px">
      {weaponsMaterials.map((item) => (
        <Box>
          <DashBox size="md" key={item.name}>
            {showDays && <Heading mb="16px" fontSize="14px" fontWeight="semibold" lineHeight="1.33333">
              {item.day.map((day) => t(`site.days.${day}`)).join(', ') }
            </Heading>}
            <ItemFragment
              image={item.images.image}
              title={t(`weaponmaterialtypes.${item.name}`)}
              description={t(`domainofforgeries.${item.domainofforgery}`)}
            />
            {!!item.weapons && <SimpleGrid columns={1} pt="12px" spacing="16px">
              {item.weapons.map((weapon) => (
                <ItemSliver
                  key={weapon.name}
                  title={t(`weapons.${weapon.name}`)}
                  image={weapon.images.image}
                />
              ))}
            </SimpleGrid>}
          </DashBox>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default DailyWeaponsMaterials
