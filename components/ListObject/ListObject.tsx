import React from 'react'
import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react'
import { MdModeEdit } from 'react-icons/md'
import { IArtifactItem, IWeapon } from '../../types'

interface IProps {
  image?: IArtifactItem['images']['image'] | IWeapon['images']['image']
  placeholderImage?: string
  label?: IArtifactItem['name'] | IWeapon['name']
  placeholderLabel?: string
  onClick?: () => void
}

const ListObject = ({
  image,
  placeholderImage = 'https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Adventurer%27s_Flower.png',
  label,
  placeholderLabel = 'Select an item',
  onClick,
}: IProps) => {

  return (
    <HStack
      role="group"
      spacing={2}
      onClick={onClick}
      cursor="pointer"
    >
      <AspectRatio
        ratio={1}
        flex="0 0 44px"
      >
        <Box>
          <Box
            width="100%"
            height="100%"
            p={2}
            borderRadius="8px"
            border="1px solid #ccc"
          >
            <Box
              as="img"
              src={image || placeholderImage}
              {...(!image ? { style: { filter: 'grayscale(1)'}} : {})}
            />
          </Box>
          <Center
            opacity={0}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            background="rgba(0, 0, 0, .6)"
            borderRadius="10px"
            transition="opacity .2s ease"
            _groupHover={{ opacity: 1 }}
          >
            <Icon as={MdModeEdit} w={5} h={5} color="#fff" />
          </Center>
        </Box>
      </AspectRatio>
      <Box>
        <Text
          opacity={label ? 1 : .6}
          fontFamily="heading"
          fontSize="16px"
          transition="padding-left .2s ease"
          _groupHover={{ paddingLeft: '.12rem' }}
        >
          {label || placeholderLabel}
        </Text>
      </Box>
    </HStack>
  )
}

export default ListObject
