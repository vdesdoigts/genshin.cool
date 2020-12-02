import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { AppSelectors } from '../../redux/selectors'
import Select from '../Select'

const Schedule = () => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const currentSelectedDay = useSelector(AppSelectors.getCurrentSelectedDay)

  const options = [
    { value: 'all', label: t('site.days.week') },
    { value: 'Monday', label: t('site.days.monday') },
    { value: 'Tuesday', label: t('site.days.tuesday') },
    { value: 'Wednesday', label: t('site.days.wednesday') },
    { value: 'Thursday', label: t('site.days.thursday') },
    { value: 'Friday', label: t('site.days.friday') },
    { value: 'Saturday', label: t('site.days.saturday') },
    { value: 'Sunday', label: t('site.days.sunday') },
  ]
  
  return (
    <Flex
      position="relative"
      background="#6C5DD3"
      borderRadius="24px"
      p="32px"
      color="#fff"
    >
      <Box
        position="relative"
        zIndex={2}
        flex="0 0 240px"
        py="13px"
      >
        <Heading
          mb="14px"
          fontSize="24px"
          fontWeight="medium"
          lineHeight="1.33333"
        >
          {t('site.genshin_impact_farming_guide')}
        </Heading>
        <Text mb="18px" fontSize="14px">
        {t('site.genshin_impact_farming_guide_description')}
        </Text>
        <Box>
          <Box maxW="400px">
            <Select
              instanceId="day"
              defaultValue={currentSelectedDay}
              name="color"
              options={options}
              value={options.find((option) => option.value === currentSelectedDay)}
              // @ts-ignore
              onChange={value => dispatch.app.setDay(value.value)}
              isSearchable={false}
              maxMenuHeight={400}
            />
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        zIndex={1}
        bottom="0px"
        right="-40px"
        display={{ base: 'none', sm: 'block' }}
        width={{ base: '400px', md: '580px' }}
        height="360px"
        backgroundImage="url(/images/site/sucrose.png)"
        backgroundPosition="center bottom"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
      />
    </Flex>
  )
}

export default Schedule
