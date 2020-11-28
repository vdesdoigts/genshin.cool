import React from 'react'
import {
  AspectRatio,
  Box,
  BoxProps,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import { IArtifactItem, IWeapon } from '../../types'

interface IProps {
  image?: IArtifactItem['images']['image'] | IWeapon['images']['image']
  label: IArtifactItem['name'] | IWeapon['name']
  labelSize?: string
  onSelect?: () => void
  isSelected?: boolean
  size?: string
  imgContainerProps?: BoxProps
  ratio?: number
  showLabelIfLargerThanLg?: boolean
}

const ListItem = ({
  image,
  label,
  labelSize = '1rem',
  onSelect,
  isSelected,
  size = '2.125rem',
  imgContainerProps = { py: '.313rem', pl: 2 },
  ratio = 1,
}: IProps) => {

  return (
    <HStack
      opacity={isSelected ? .4 : 1}
      spacing={4}
      borderRadius="0 10px 10px 0"
      onClick={onSelect}

      {...(!isSelected ? { cursor: 'pointer' } : { } )}
    >
      {!!image && (
        <Box {...imgContainerProps}>
          <AspectRatio ratio={ratio} overflow="hidden" width={size} borderRadius=".5rem" background="#f2f4f8">
            <Image
              src={image}
              objectFit="contain"
            />
          </AspectRatio>
        </Box>
      )}
      <Flex
        align="center"
        flex="1 1 auto"
        alignSelf="stretch"
        px={4}
        borderRadius=".5rem"
        background="#f2f4f8"
      >
        <Text
          fontSize={labelSize}
          fontWeight="medium"
        >
          {label}
        </Text>
      </Flex>
    </HStack>
  )
}

export default ListItem
