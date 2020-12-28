import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Checkbox,
  Collapse,
  Flex,
  Heading,
  Icon,
  Select,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useDisclosure,
} from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Image from 'next/image'
import useRematchDispatch from '../../hooks/useRematch'
import { ICharacter, IRosterCharacter } from '../../types'
import colors from '../../theme/colors'

interface IProps {
  ascension?: IRosterCharacter['character']['ascension']
  talents?: IRosterCharacter['character']['talents']
  character: ICharacter
  isDisabled?: boolean
  onDisabled?: () => void
}

const CharacterItem = ({
    ascension = 0,
    talents = [0, 0, 0],
    character,
    isDisabled,
    onDisabled,
  }: IProps) => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const onSelectAscension = (character: ICharacter['id'], ascension: IRosterCharacter['character']['ascension']) => {
    dispatch.profile.updateCharacterAscension({ character, ascension })
  }
  const { isOpen, onToggle } = useDisclosure()

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
        borderRadius: '24px',
      }}
    >
      <Box
        overflow="hidden"
        position="relative"
        borderRadius="0.875rem"
        background="#fff"
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
          background: colors[character.element.toLowerCase()],
          transition: "all .25s",
        }}
      >
        <Stack
          onClick={onToggle}
          role="group"
          direction="row"
          spacing="0"
          align="center"
          justify="space-between"
          cursor="pointer"
        >
          <Box
            flex="1 1 100%"
            pl="1.25rem"
            py="16px"
          >
            <Stack direction="row" spacing="1.875rem">
              <Box position="relative" overflow="hidden" flex="0 0 3.5rem" width="3.5rem" height="3.5rem" borderRadius=".5rem" bg="#f2f4f8">
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
                  color="#4b4d55"
                  fontFamily="heading"
                  fontSize="1.125rem"
                  fontWeight="semibold"
                  lineHeight="1"
                >
                  {character.name}
                </Text>
                <Text color="#bbbdcb" fontSize="0.875rem" fontWeight="medium">
                  {t('site.ascension_rank')} {ascension}
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Icon
            as={MdKeyboardArrowDown}
            w={6}
            h={6}
            mr="24px"
            color={isOpen ? '#4b4d55' : '#dadada'}
            transition="all .25s ease"
            transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }
            _groupHover={{ color: "#4b4d55" }}
          />
        </Stack>
          <Collapse in={isOpen}>
            <Box px="24px" pb="16px">
              {/* {!!onDisabled && <Flex align="center" justify="center" p={4} pr="1.25rem">
                <Checkbox isChecked={!isDisabled} onChange={(e) => { e.preventDefault(); onDisabled() }} />
              </Flex>} */}
              <Wrap align="center" justify="space-between" mb="4px" flexWrap="nowrap">
                <WrapItem>
                  <Heading isTruncated as="span" noOfLines={1} color="#4b4d55" fontSize="14px" fontWeight="semibold" lineHeight="1.33333">
                    {t('site.ascension_rank')}
                  </Heading>
                </WrapItem>
                <WrapItem flex="0 0 auto">
                  <Select
                    variant="filled"
                    size="sm"
                    borderRadius="12px"
                    _focus={{
                      backgroundColor: '#EDF2F7',
                    }}
                    defaultValue={ascension.toString()}
                    onChange={(e) => onSelectAscension(character.id, (parseInt(e.currentTarget.value) as IRosterCharacter['character']['ascension']))}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </Select>
                </WrapItem>
              </Wrap>
            
              {/* @ts-ignore */}
              {character.talents.map((talent, index) => (
                <Wrap align="center" justify="space-between" mb="4px" flexWrap="nowrap">
                  <WrapItem>
                    <Heading isTruncated as="span" noOfLines={1} color="#4b4d55" fontSize="14px" fontWeight="semibold" lineHeight="1.33333">
                      {t(`talentnames.${talent.name}`)}
                    </Heading>
                  </WrapItem>
                  <WrapItem flex="0 0 auto">
                    <Select
                      variant="filled"
                      size="sm"
                      borderRadius="12px"
                      _focus={{
                        backgroundColor: '#EDF2F7',
                      }}
                      defaultValue={talents ? talents[index].toString() : 0}
                      onChange={(e) => dispatch.profile.updateCharacterTalent({ character: character.id, talent: index, value: parseInt(e.currentTarget.value) })}
                    >
                      <option value="0">1</option>
                      <option value="1">2</option>
                      <option value="2">3</option>
                      <option value="3">4</option>
                      <option value="4">5</option>
                      <option value="5">6</option>
                      <option value="6">7</option>
                      <option value="7">8</option>
                      <option value="8">9</option>
                    </Select>
                  </WrapItem>
                </Wrap>
              ))}
            </Box>
          </Collapse>
      </Box>
    </Box>
  )
}

export default CharacterItem
