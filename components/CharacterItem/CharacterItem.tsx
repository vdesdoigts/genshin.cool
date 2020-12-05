import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Checkbox,
  Flex,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Image from 'next/image'
import useRematchDispatch from '../../hooks/useRematch'
import { ICharacter, IRosterCharacter } from '../../types'
import colors from '../../theme/colors'

interface IProps {
  ascension?: IRosterCharacter['character']['ascension']
  character: ICharacter
  isDisabled?: boolean
  onDisabled?: () => void
  shadow?: boolean
  isSelected?: boolean
  selectPosition?: 'description' | 'ascension'
  hover?: boolean
}

const CharacterItem = ({
    ascension = 0,
    character,
    isDisabled,
    onDisabled,
    shadow,
    isSelected,
    selectPosition = 'description',
    hover,
  }: IProps) => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const onSelectAscension = (character: ICharacter['id'], ascension: IRosterCharacter['character']['ascension']) => {
    dispatch.profile.updateCharacterAscension({ character, ascension })
  }

  return (
    <Box
      role="group"
      position="relative"
      _before={shadow ? {
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
      } : {}}
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
              <Stack flexGrow={1} spacing={1} justify="center" {...selectPosition === 'description' ? { position: 'relative', cursor: 'pointer' } : {}}>
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
                  <Box {...selectPosition === 'ascension' ? { position: 'relative', display: 'inline-block', cursor: 'pointer' } : {}}>
                    <Box color={isSelected ? '#fff' : '#bbbdcb'}>
                      <Text fontSize="0.875rem" fontWeight="medium">
                        {t('site.ascension_rank')} {ascension}
                        {/* &#183; {weapon ? weapon.name : 'No weapon'} */}
                      </Text>
                    </Box>
                    <select
                      style={{
                        opacity: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                      }}
                      defaultValue={ascension.toString()}
                      onChange={(e) => onSelectAscension(character.id, (parseInt(e.currentTarget.value) as IRosterCharacter['character']['ascension']))}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option value="0">{`${t('site.ascension_rank_none')}`}</option>
                      <option value="1">{`${t('site.ascension_rank')} 1`}</option>
                      <option value="2">{`${t('site.ascension_rank')} 2`}</option>
                      <option value="3">{`${t('site.ascension_rank')} 3`}</option>
                      <option value="4">{`${t('site.ascension_rank')} 4`}</option>
                      <option value="5">{`${t('site.ascension_rank')} 5`}</option>
                      <option value="6">{`${t('site.ascension_rank')} 6`}</option>
                    </select>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Box>
          {!!onDisabled && <Flex align="center" justify="center" p={4} pr="1.25rem">
            <Checkbox isChecked={!isDisabled} onChange={(e) => { e.preventDefault(); onDisabled() }} />
          </Flex>}
          {(hover || isSelected) && (
            <Box opacity={isSelected ? 1 : 0} px={8} transition="all .25s" _groupHover={{ opacity: 1 }}>
              <Icon as={MdKeyboardArrowRight} color={isSelected ? '#fff' : '#bbbdcb'} w={7} h={7} opacity={.8} />
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  )
}

export default CharacterItem
