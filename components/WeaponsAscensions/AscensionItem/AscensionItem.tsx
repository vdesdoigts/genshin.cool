import React from 'react'
import {
  AspectRatio,
  AvatarGroup,
  Avatar,
  Box,
  Flex,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'

interface IProps {
  image: string 
  label: string
  sublabel?: string
  characters: any[]
}

const AscensionItem = ({ image, label, sublabel, characters }: IProps) => {

  return (
    <Stack spacing={2}>
      <HStack spacing="16px">
        <AspectRatio
          ratio={1}
          flex="0 0 56px"
          width="56px"
          height="56px"
          borderRadius="16px"
          background="#f2f4f8"
        >
          <Box width="100%" height="100%" p={2}>
            <Box position="relative" width="100%" height="100%">
              <Image
                src={image}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Box>
        </AspectRatio>
        <Flex width="100%" align="center" justify="space-between">
          <Box flex="1 1 100%">
            <Text
              mb="3px"
              fontSize="16px"
              lineHeight="1.1875"
              fontWeight="600"
            >
              {label}
            </Text>
            {sublabel && <Text
              color="#808191"
              fontSize="13px"
              lineHeight="1.38462"
              fontWeight="600"
            >
              {sublabel}
            </Text>}
          </Box>
          <Box flex="0 0 auto">
            <AvatarGroup size="sm" max={4}>
              {characters.map((item) => (
                <Avatar key={item.id} name={item.name} src={item.images.image} background="#f2f4f8" loading="eager" />
              ))}
            </AvatarGroup>
          </Box>
        </Flex>
      </HStack>
    </Stack>
  )
}

export default AscensionItem
