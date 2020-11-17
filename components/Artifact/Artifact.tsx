import React from 'react'
import {
  AspectRatio,
  Box,
  HStack,
  Text,
} from '@chakra-ui/react'
import { IArtifactItem } from '../../types'


interface IProps {
  artifact: IArtifactItem
}

const Artifact = ({ artifact }: IProps) => {
  const { name, images } = artifact || {}

  return (
    <HStack spacing="1rem">
      <AspectRatio
        ratio={1}
        flex="0 0 44px"
        borderRadius="10px"
        border="1px solid #ccc"
      >
        {images 
          ? (
            <Box
              as="img"
              src={images.image}
            />
          )
          : (
            <div></div>
          )
        }
      </AspectRatio>
      <Box>
        <Text
          fontFamily="heading"
          fontSize="16px"
        >
          {name || 'No artifact'}
        </Text>
      </Box>
    </HStack>
  )
}

export default Artifact
