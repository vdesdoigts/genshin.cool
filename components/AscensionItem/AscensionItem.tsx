import React from 'react'
import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import ListItem from '../ListItem'
import { ICharacter } from '../../types'

interface IProps {
  image: string 
  label: string
  sublabel: string,
  characters: any[],
  date?: string
}

const AscensionItem = ({ image, label, sublabel, characters, date }: IProps) => {
  return (
    <Stack spacing={2}>
      <HStack spacing={4}>
        <AspectRatio
          ratio={1}
          width="5rem"
          borderRadius="8px"
          border="1px solid #ccc"
        >
          <Box p={2}>
            <Image
              src={image}
              width="100%"
            />
          </Box>
        </AspectRatio>
        <Box>
          {date && <Text
            color="#1B1D21"
            fontFamily="heading"
            fontSize=".75rem"
          >
            {date}
          </Text>}
          <Text
            fontFamily="heading"
            fontSize="1.125rem"
            fontWeight="medium"
          >
            {label}
          </Text>
          <Text
            color="#1B1D21"
            fontFamily="heading"
            fontSize="1rem"
          >
            {sublabel}
          </Text>
        </Box>
      </HStack>
      <HStack spacing={3}>
        {characters.map((item, index) => (
          <ListItem
            key={index}
            image={item.images.image}
            label={item.name}
            size="2.438rem"
            labelSize=".875rem"
            imgContainerProps={{ py: 0 }}
          />
        ))}
      </HStack>
    </Stack>
  )
}

export default AscensionItem
