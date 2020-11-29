import React from 'react'
import { css } from '@emotion/css'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
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
    { value: 'Saturday', label: 'Saturday' },
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
          Genshin Impact farming guide
        </Heading>
        <Text mb="18px" fontSize="14px">
          Find out the best farming methods and schedule optimization.
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
      <Box position="absolute" zIndex={1} bottom="0px" right="-40px" display={{ base: 'none', sm: 'block' }} width={{ base: '400px', md: '580px' }} height="360px">
        <Image
          src="/images/site/sucrose.png"
          layout="fill"
          className={css({ objectFit: 'contain', objectPosition: 'center bottom' })}
          // className={css({ display: 'block' })}
        />
      </Box>
    </Flex>
  )
}

export default Schedule
