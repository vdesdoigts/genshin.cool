
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { AspectRatio, Box, SimpleGrid, Tooltip } from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'
import ErrorPage from 'next/error'
import api from '../../api'
import AppHeading from '../../components/AppHeading'
import DashBox from '../../components/DashBox'
import ascensions from '../../data/characters-ascensions'
import talents from '../../data/characters-talents'
import { getNameTranslation } from '../../utils/character-ascension'
import mora from '../../data/materials/common/mora'

const Item = ({ item, amount}) => {
  const { t } = useTranslation()
  return (
    <Box>
      <Tooltip
        label={t(getNameTranslation(item))}
        placement="bottom-start"
        openDelay={100}
        borderRadius="8px"
        bg="rgba(0, 0, 0, .8)"
        px={4}
        py={2}
        offset={[0, 2]}
        color="#fff"
      >
        <Box position="relative">
          <AspectRatio
            ratio={1}
            flex="0 0 1"
            borderRadius="16px"
            bg="#f2f4f8"
          >
            <Box width="100%" height="100%" p={2}>
              <Box position="relative" width="100%" height="100%">
                <Image
                  src={item.images.image}
                  layout="fill"
                  objectFit="contain"
                  loading="eager"
                />
              </Box>
            </Box>
          </AspectRatio>
          <Box
            position="absolute"
            bottom={0}
            right={0}
            mt="8px"
            padding="3px 10px"
            background="rgba(160, 215, 231, 0.85)"
            borderRadius="8px"
            color="#ffffff"
            fontSize="13px"
            fontWeight="600"
            lineHeight="1.38462"
          >
            {amount}
          </Box>
        </Box>
      </Tooltip>
    </Box>
  )
}

export default function Post({ character }) {
  const { t } = useTranslation()
  const characters = api.getCharacters()


  return (
    <Box
      flexGrow={1}
      paddingLeft={{ base: 0, xxl: '256px' }}
      transition="all .25s"
    >
      <Box maxW={{ base: '600px', md: '1000px', xl: '1400px' }} margin="0 auto">
        <Box
          flex={{ base: '0 0 100%' }}
          maxW={{ base: '100%' }}
          pt="48px"
          pb="32px"
          px={{ base: '20px', md: '64px', xl: '32px', xxl: '64px' }}
        >
          {characters.map((character) => (
            <Link
              href={`/characters/${character.name.toLowerCase()}`}
            >
              {character.name}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
