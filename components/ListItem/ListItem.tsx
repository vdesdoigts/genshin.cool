import React from 'react'
import {
  AspectRatio,
  Box,
  BoxProps,
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
  showLabelIfLargerThanLg,
}: IProps) => {

  return (
    <HStack
      opacity={isSelected ? .4 : 1}
      spacing={4}
      background="#F5F5F5"
      borderRadius="0 10px 10px 0"
      {...(!isSelected ? { onClick: onSelect, cursor: 'pointer' } : { pointerEvents: 'none' } )}
    >
      {!!image && (
        <Box {...imgContainerProps}>
          <AspectRatio ratio={ratio} width={size}>
            <Image
              src={image}
              objectFit="contain"
            />
          </AspectRatio>
        </Box>
      )}
      <Text
        display={{ base: showLabelIfLargerThanLg ? 'none' : 'inline-block', lg: 'inline-block' }}
        pt=".125rem"
        pr={6}
        fontFamily="heading"
        fontSize={labelSize}
        fontWeight="medium"
      >
        {label}
      </Text>
    </HStack>
  )
}

export default ListItem
