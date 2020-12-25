
import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import api from '../../api'

export default function Post({ character }) {
  const router = useRouter()

  if (!router.isFallback && !character) {
    return <ErrorPage statusCode={404} />
  }

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
