import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Heading, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import { getNameTranslation } from '../../utils/character-ascension'
import DashBox from '../DashBox'
import ItemFragment from '../ItemFragment'
import ItemStack from '../ItemStack'

interface IProps {
  talentsMaterials: any
  showDays?: boolean
}

const DailyTalentsMaterials = ({ talentsMaterials, showDays }: IProps) => {
  const { t } = useTranslation()

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="16px">
      {talentsMaterials.map((item) => (
        <Box>
          <DashBox size="md" key={item.id}>
            {showDays && <Heading mb="16px" fontSize="14px" fontWeight="semibold" lineHeight="1.33333">
              {item.day.map((day) => t(`site.days.${day}`)).join(', ') }
            </Heading>}
            <ItemFragment
              image={item.images.image}
              title={t(getNameTranslation(item))}
              description={t(`domainofmasteries.${item.domainOfMastery}`)}
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
  )
}

export default DailyTalentsMaterials
