import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { AppSelectors } from '../../redux/selectors'
import Select from '../Select'

const Schedule = () => {
  const dispatch = useRematchDispatch()
  const currentSelectedDay = useSelector(AppSelectors.getCurrentSelectedDay)

  const options = [
    { value: 'all', label: 'Week' },
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Statuday', label: 'Statuday' },
    { value: 'Sunday', label: 'Sunday' },
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
        flex="0 0 240px"
        py="13px"
      >
        <Heading
          mb="14px"
          fontSize="24px"
          fontWeight="medium"
          lineHeight="1.33333"
        >
          Genshin Impact farming guide
        </Heading>
        <Text mb="18px" fontSize="14px">
          Select a day of the week, or choose week option to see all days.
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
            />
          </Box>
        </Box>
      </Box>
      <Box position="absolute" bottom="0px" right="0px" width="70%">
        <Image src="https://uploadstatic-sea.mihoyo.com/contentweb/20200723/2020072319115159476.png" />
      </Box>
    </Flex>
  )
}

export default Schedule
