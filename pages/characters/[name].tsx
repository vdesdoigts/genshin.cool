
import { useRouter } from 'next/router'
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
  const router = useRouter()

  if (!router.isFallback && !character) {
    return <ErrorPage statusCode={404} />
  }

  console.log('character: ', character)

  return (
    <>
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {character.name}
                </title>
                <meta property="og:image" content={character.images.image} />
              </Head>
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
                      subtitle={t('site.header_character_subtitle')}
                      title={`${character.name}, ${t(`affiliations.${character.affiliation}`)}`}
                    />
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing="16px" pt="24px">
                      <DashBox title={t('site.header_characters_ascensions_title')} size="sm" shadow>
                        <SimpleGrid columns={1} spacing="16px">
                          {character.ascension.map((ascension, ascensionIndex) => {
                            return (
                              <SimpleGrid columns={5} spacing="8px">
                                {ascension.map((item, index) => (
                                  <Item item={item} amount={ascensions[ascensionIndex].amount[index]} />
                                ))}
                                <Item item={mora} amount={ascensions[ascensionIndex].cost} />
                              </SimpleGrid>
                            )
                          })}
                        </SimpleGrid>
                      </DashBox>
                    </SimpleGrid>
                    <SimpleGrid columns={{ base: 1, md: 3 }} pt="16px" spacing="16px">
                      {character.talents.map((talent, talentIndex) => {
                        
                        return (
                          <DashBox title={t(`talentnames.${talent.name}`)} shadow>
                            <SimpleGrid columns={1} spacing="16px">
                              {talent.requirements.map((requirement, requirementIndex) => (
                                <>
                                  <SimpleGrid columns={5} spacing="8px">
                                    {requirement.map((item, index) => (
                                      <Item item={item} amount={talents[requirementIndex].amount[index]} />
                                    ))}
                                    <Item item={mora} amount={talents[requirementIndex].cost} />
                                  </SimpleGrid>
                                </>
                              ))}
                            </SimpleGrid>
                          </DashBox>
                        )
                      })}
                    </SimpleGrid>
                  </Box>
                </Box>
              </Box>
            </article>
          </>
        )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const character = await api.getCharacterByName(params.name, { withAscension: true, withTalents: true })

  return {
    props: {
      character: character,
    },
  }
}

export const getStaticPaths = () => {
  const characters = api.getCharacters()

  return {
    paths: [
      ...characters.map((character) => {
        return {
          params: {
            name: character.name.toLowerCase(),
          },
          locale: 'en',
        }
      }),
      ...characters.map((character) => {
        return {
          params: {
            name: character.name.toLowerCase(),
          },
          locale: 'fr',
        }
      }),
    ],
    fallback: true,
  }
}
