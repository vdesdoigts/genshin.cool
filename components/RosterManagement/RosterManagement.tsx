import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Grid,
  Icon,
  Select,
  Text,
  useDisclosure,
  SimpleGrid,
  Stack,
  AspectRatio,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FiSettings } from 'react-icons/fi'
import { getCharacterById } from '../../api'
import { ICharacter, IRoster, IRosterCharacter } from '../../types'
import useRematchDispatch from '../../hooks/useRematch'
import DashBox from '../DashBox'
import SelectCharactersMenu from '../SelectCharactersMenu'
import CharacterItem from '../CharacterItem'

interface IRosterManagementItem {
  character: ICharacter
  ascension: IRosterCharacter['character']['ascension']
  isSelected: boolean
}

const RosterManagementItem = ({ character, ascension = 0, isSelected }: IRosterManagementItem) => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const onSelectAscension = (character: ICharacter['id'], ascension: IRosterCharacter['character']['ascension']) => {
    dispatch.profile.updateCharacterAscension({ character, ascension })
  }

  return (
    <DashBox variant={isSelected ? 'purple' : null} br="sm" size="sm" _hover={!isSelected ? { cursor: 'pointer', bg: 'rgba(228, 228, 228, 0.3)' } : {}}>
      <Flex direction={{ base: 'column', sm: 'row' }} color={isSelected ? '#fff' : 'inherit'}>
        <Box
          display={{ base: 'none', md: 'block' }}
          position="relative"
          flexShrink={0}
          width="68px"
          height="68px"
          borderRadius=".5rem"
          background="#f2f4f8"
          fontSize="0"
        >
          <Image
            src={character.images.image}
            layout="fill" 
            objectFit="contain"
          />
        </Box>
        <Box
          flexGrow={1}
          padding={{ base: '0', sm: '0 32px 0 24px' }}
        >
          <Text mb="9px" fontSize="16px" lineHeight="1.1875" fontWeight={600}>{character.name}</Text>
          <Select
            bg={isSelected ? '#fff' : 'transparent'}
            borderColor={isSelected ? '#fff' : '#E2E8F0'}
            color="#11142D"
            maxW="240px"
            cursor="pointer"
            size="sm"
            variant={isSelected ? 'filled' : 'outline'}
            _hover={{
              bg: isSelected ? '#fff' : 'transparent'
            }}
            _focus={{
              bg: isSelected ? '#fff' : 'transparent'
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
          </Select>
        </Box>
      </Flex>
    </DashBox>
  )
}

interface IProps {
  currentRoster: IRoster
  selectedCharacter: IRosterCharacter['character']
  setSelectedCharacter: (index: number) => void
}

const RosterManagement = ({ currentRoster, selectedCharacter, setSelectedCharacter }: IProps) => {
  const { t } = useTranslation()
  const { isOpen: isSelectCharacterDrawerOpen, onOpen: onSelectCharacterDrawerOpen, onClose: onSelectCharacterDrawerClose } = useDisclosure()

  return (
    <>
      {/* <DashBox
        title={t('site.characters')}
        shadow
        variant="pink"
        rightButtons={(
          <Button
            position="relative"
            width="48px"
            height="48px"
            background="none"
            borderRadius="50%"
            fontSize="0"
            transition="all .25s"
            onClick={onSelectCharacterDrawerOpen}
            cursor="pointer"
            _hover={{
              boxShadow: '0 5px 10px rgba(227, 230, 236, 0.6)',
            }}
          >
            <Icon as={FiSettings} w={6} h={6} />
          </Button>
        )}
      > */}
      <Box>
        {currentRoster.length > 0
          ? (
            <>
              <Box display={{ base: 'block', xl: 'none' }}>
                <Grid templateColumns="repeat(auto-fit, minmax(90px, 1fr) )" spacing={2}>
                  {currentRoster.map((roster, index) => {
                    const character = getCharacterById(roster.character.id)
                    const isSelected = selectedCharacter.id === roster.character.id
                    
                    return (
                      <DashBox
                        key={roster.character.id}
                        onClick={() => setSelectedCharacter(index)}
                        variant={isSelected ? 'purple' : null}
                        br="sm"
                        size="xs"
                        _hover={!isSelected ? { cursor: 'pointer', bg: 'rgba(228, 228, 228, 0.3)' } : {}}
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
              </Box>
              <SimpleGrid spacing={2}>
                {currentRoster.map((roster, index) => {
                  const character = getCharacterById(roster.character.id)
                  const isSelected = selectedCharacter.id === roster.character.id
                  
                  return (
                    <Box
                      key={roster.character.id}
                      onClick={() => setSelectedCharacter(index)}
                      display={{ base: isSelected ? 'block' : 'none', xl: 'block' }}
                      cursor="pointer"
                    >
                      <CharacterItem
                        character={character}
                        ascension={roster.character.ascension}
                        isSelected={isSelected}
                        shadow
                        hover
                        selectPosition="ascension"
                      />
                    </Box>
                  )
                })}
              </SimpleGrid>
            </>
          )
          : (
            <div></div>
          )
        }
      </Box>
      {/* </DashBox> */}
    </>
  )
}

export default RosterManagement
