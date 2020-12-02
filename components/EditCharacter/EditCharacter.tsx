import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'
import { getCharacterById } from '../../api'
import { ICharacter, IRosterCharacter } from '../../types'

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: "#6C5DD3",
          color: "#fff",
          borderColor: "#6C5DD3",
        }}
        px={4}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  )
}

interface IProps {
  character?: ICharacter['id']
}

const EditCharacter = ({ character: characterId }: IProps) => {

  if (!characterId) {
    return null
  }

  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const rosterCharacter = useSelector((state) => ProfileSelectors.getRosterCharacterById(state, characterId))
  const character = getCharacterById(characterId)

  const ascensionOptions = ['1', '2', '3', '4', '5', '6']
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'ascension',
    defaultValue: (rosterCharacter.character.ascension || 1).toString(),
    onChange: (e) => onSelectAscension(character.id, (parseInt(e as string) as IRosterCharacter['character']['ascension'])),
  })
  const group = getRootProps()

  const onSelectAscension = (character: ICharacter['id'], ascension: IRosterCharacter['character']['ascension']) => {
    dispatch.profile.updateCharacterAsension({ character, ascension })
  }

  return (
    <>
      <Box pt={10}>
        <Stack direction="row" spacing="1.875rem">
          <Box overflow="hidden" position="relative" width="5.625rem" height="5.625rem" borderRadius=".5rem" background="#f2f4f8">
            <Image
              src={character.images.image}
              layout="fill"
            />
          </Box>
          <Stack spacing={1} justify="center">
            <Text
              color="#4b4d55"
              fontFamily="heading"
              fontSize="1.25rem"
              fontWeight="semibold"
              lineHeight="1"
            >
              {character.name}
            </Text>
            <Text color="#bbbdcb" fontSize="1rem" fontWeight="medium">{t(`affiliations.${character.affiliation}`)}</Text>
          </Stack>
        </Stack>
        <Box pt={8}>
          <Heading mb="16px" fontSize="14px" fontWeight="semibold" lineHeight="1.33333">
            Ascension Rank
          </Heading>
          <HStack {...group}>
            {ascensionOptions.map((value) => {
              const radio = getRadioProps({ value })
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              )
            })}
          </HStack>
        </Box>
      </Box>
    </>
  )
}

export default EditCharacter
