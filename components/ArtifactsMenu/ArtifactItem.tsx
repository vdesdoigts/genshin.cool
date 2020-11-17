import React from 'react'
import {
  AspectRatio,
  Box,
  HStack,
  Text,
} from '@chakra-ui/react'
import { IArtifactItem } from '../../types'

interface IProps {
  artifact?: IArtifactItem
  onSelect?: () => void
  isCurrent?: boolean
}

const ArtifactItem = ({
  artifact,
  onSelect,
  isCurrent,
}: IProps) => {
  return (
    <HStack
      spacing={4}
      background="#F5F5F5"
      borderRadius="0 10px 10px 0"
    >
      <AspectRatio ratio={1} width="2.25rem">
        <Box py=".25rem" pl={2}>
          <Box
            as="img"
            src={artifact.images.image}
          />
        </Box>
      </AspectRatio>
      <Text
        fontFamily="heading"
        fontSize="1rem"
        fontWeight="medium"
      >
        {artifact.name}
      </Text>
    </HStack>
  )
}

export default ArtifactItem
