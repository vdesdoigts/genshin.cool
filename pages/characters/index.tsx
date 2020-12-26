
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { AspectRatio, Box, Grid, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import api from '../../api'
import { getNameTranslation } from '../../utils/character-ascension'
import AppHeading from '../../components/AppHeading'
import DashBox from '../../components/DashBox'
import colors from '../../theme/colors'

const Item = ({ character, isSelected }) => {
  const { t } = useTranslation()
  return (
    <Box
      role="group"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: '22px',
        left: '18px',
        right: '18px',
        bottom: '-40px',
        zIndex: '-2',
        background: '#E3E6EC',
        opacity: '0.91',
        // @ts-ignore
        filter: 'blur(86.985px)',
        borderRadius: '24px'
      }}
    >
      <Box
        overflow="hidden"
        position="relative"
        borderRadius="0.875rem"
        background={isSelected ? '#6C5DD3' : '#fff'}
        transition="all .25s"
        _before={{
          content: "''",
          position: "absolute",
          zIndex: 2,
          top: 0,
          left: 0,
          display: "block",
          width: "4px",
          height: "100%",
          background: isSelected ? '#6C5DD3' : colors[character.element.toLowerCase()],
          transition: "all .25s",
        }}
      >
        <Stack direction="row" spacing="0" align="center" justify="space-between">
          <Box
            flex="1 1 100%"
            pl="1.25rem"
            py="16px"
          >
            <Stack direction="row" spacing="1.875rem">
              <Box position="relative" overflow="hidden" flex="0 0 3.5rem" width="3.5rem" height="3.5rem" borderRadius=".5rem" background={isSelected ? '#fff' : '#f2f4f8'}>
                <Box position="relative" width="100%" height="100%">
                  <Image
                    src={character.images.image}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
              </Box>
              <Stack flexGrow={1} spacing={1} justify="center">
                <Text
                  color={isSelected ? '#fff' : '#4b4d55'}
                  fontFamily="heading"
                  fontSize="1.125rem"
                  fontWeight="semibold"
                  lineHeight="1"
                >
                  {character.name}
                </Text>
                <Box>
                  <Box color={isSelected ? '#fff' : '#bbbdcb'}>
                    <Text fontSize="0.875rem" fontWeight="medium">
                      {t(`affiliations.${character.affiliation}`)}
                    </Text>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default function Characters() {
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
          <AppHeading
            subtitle={t('site.header.characters_list_subtitle')}
            title={t('site.header.characters_list_title')}
          />
          {/* {characters.map((character) => (
            <Link
              href={`/characters/${character.name.toLowerCase()}`}
            >
              {character.name}
            </Link>
          ))} */}
          {/* <Box display={{ base: 'block', xl: 'none' }} pt={{ base: '22px', md: '44px' }}>
            <Grid templateColumns="repeat(auto-fill, minmax(90px, 1fr) )" spacing={2}>
              {characters.map((character, index) => {
                // const isSelected = selectedCharacter.id === roster.character.id
                
                return (
                  <DashBox
                    key={character.id}
                    // onClick={() => setSelectedCharacter(index)}
                    // variant={isSelected ? 'purple' : null}
                    br="sm"
                    size="xs"
                    // _hover={!isSelected ? { cursor: 'pointer', bg: 'rgba(228, 228, 228, 0.3)' } : {}}
                  >
                    <AspectRatio
                      ratio={1}
                      width="100%"
                      borderRadius=".5rem"
                      background="#f2f4f8"
                      fontSize="0"
                    >
                      <Image
                        src={character.images.image}
                        layout="fill" 
                        objectFit="contain"
                      />
                    </AspectRatio>
                  </DashBox>
                )
              })}
            </Grid>
          </Box> */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="16px" pt={{ base: '22px', md: '44px' }}>
            {characters.map((character) => {
              return (
                <Link
                  key={character.id}
                  href={{
                    pathname: '/characters/[name]',
                    query: { name: character.name.toLowerCase() },
                  }}
                >
                  <Box
                    // onClick={() => setSelectedCharacter(index)}
                    // display={{ base: isSelected ? 'block' : 'none', xl: 'block' }}
                    cursor="pointer"
                  >
                    <Item
                      character={character}
                      isSelected={false}
                    />
                  </Box>
                </Link>
              )
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}
