import React from 'react'
import { css } from '@emotion/css'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Flex,
  Icon,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/close-button'
import { FiSettings } from 'react-icons/fi'
import { MdLanguage } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { ILangs } from '../../types'
import useRematchDispatch from '../../hooks/useRematch'
import { OptionsSelectors, ProfileSelectors } from '../../redux/selectors'

export const NavButton = ({ label, isCurrent, onClick, onEdit, ...rest }: { label: string, isCurrent?: boolean, onClick?: () => void, onEdit?: () => void, as?: any, href?: string }) => (
  <Flex
    alignItems="center"
    justify="space-between"
    height="56px"
    padding="0 20px"
    borderRadius="12px"
    background={isCurrent ? '#6C5DD3' : 'transparent'}
    fontSize="14px"
    fontWeight="600"
    color={isCurrent ? '#fff' : '#808191'}
    transition="all .25s"
    _active={{
      background: '#6C5DD3',
      color: '#ffffff',
    }}
    {...(!!onClick && !isCurrent ? { onClick, cursor: 'pointer' } : { })}
  >
    <Flex
      align="center"
      flex="1 1 100%"
      height="100%"
      _hover={{
        color: isCurrent ? '#fff': '#6C5DD3',
      }}
    >
      <Text noOfLines={1} fontSize="inherit" fontWeight="inherit">{label}</Text>
    </Flex>
    {!!onEdit && (
      <Box
        p={1}
        cursor="pointer"
        color={isCurrent ? '#fff' : '#808191'}
        fontSize={0}
        transition="all .25s"
        _hover={{
          transform: 'rotate(50deg)',
          color: isCurrent ? '#fff': '#6C5DD3',
        }}
        onClick={(e) => {
          e.stopPropagation();
          onEdit()
        }}>
          <Icon as={FiSettings} w={5} h={5} />
        </Box>
      )}
  </Flex>
)

interface IProps {
  onEditProfile: (index: number) => void
  isMenuOpen: boolean
  onMenuClose: () => void
  onMenuToggle: () => void
}

const Menu = ({ onEditProfile, isMenuOpen, onMenuClose, onMenuToggle }: IProps) => {
  const { i18n, t } = useTranslation()
  const dispatch = useRematchDispatch()
  const userRosterNames = useSelector(ProfileSelectors.getUserRosterNames)
  const currentLang = useSelector(OptionsSelectors.getCurrentLang)
  const currentUserProfileIndex = useSelector(ProfileSelectors.getCurrentUserProfileIndex)

  const onSelectProfile = (index: number) => {
    dispatch.profile.setCurrentProfile(index)
  }

  const onAddProfile = () => {
    dispatch.profile.addProfile()
  }

  const onChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch.options.setLang(e.target.value as ILangs)
    i18n.changeLanguage(e.target.value as ILangs)
  }

  return (
    <Box
      position="relative"
      zIndex={2}
      height="100%"
      padding="0 20px 30px"
      overflowY="auto"
      background="#fff"
    >
      <Box
        display={{ base: 'block', xxl: 'none' }}
        position="absolute"
        top={2}
        right={2}
      >
        <CloseButton size="lg" onClick={onMenuClose} />
      </Box>
      <Flex
        minH="100%"
        justify="space-between"
        direction="column"
        padding="140px 0 12px 0"
      >
        <Box
          width="215px"
          overflow="hidden"
          transition="width .25s"
        >
          <Box mb="20px">
            <Box
              position="relative"
              mb="40px"
              pb="30px"
              _before={{
                content: '""',
                position: 'absolute',
                left: '20px',
                right: '20px',
                bottom: 0,
                height: '1px',
                background: '#F0F3F6',
              }}
            >
              <Text
                mb="16px"
                pl="20px"
                color="#808191"
                fontSize="12px"
                fontWeight="500"
                line-height="1.33333"
              >
                {t('site.profiles')}
              </Text>
              <VStack width="100%" spacing={0} align="stretch">
                {userRosterNames.map((name, index) => (
                  <NavButton
                    key={index}
                    onClick={() => onSelectProfile(index)}
                    label={name}
                    isCurrent={index === currentUserProfileIndex}
                    onEdit={() => onEditProfile(index)}
                  />
                ))}
                <NavButton
                  onClick={onAddProfile}
                  label={t('site.add_a_profile')}
                />
              </VStack>
            </Box>

            <Box
              position="relative"
              mb="40px"
              pb="30px"
              _before={{
                content: '""',
                position: 'absolute',
                left: '20px',
                right: '20px',
                bottom: 0,
                height: '1px',
                background: '#F0F3F6',
              }}
            >
              <Text
                mb="16px"
                pl="20px"
                color="#808191"
                fontSize="12px"
                fontWeight="500"
                line-height="1.33333"
              >
                {t('site.settings')}
              </Text>
              <VStack width="100%" spacing={0} align="stretch">
                <Flex
                  alignItems="center"
                  height="56px"
                  borderRadius="12px"
                  background="rgba(0, 0, 0, .05)"
                >
                  <Select
                    variant="unstyled"
                    cursor="pointer"
                    _hover={{
                      color: 'currenColor',
                    }}
                    rootProps={{
                      px: '20px',
                      _hover: { color: '#6C5DD3' },
                    }}
                    icon={<Icon as={MdLanguage} opacity={.8} _hover={{ color: 'currentcolor' }} mr="20px" />}
                    iconSize="24px"
                    onChange={onChangeLanguage}
                    defaultValue={currentLang}
                    css={{ fontFamily: '-apple-system,system-ui,sans-serif', fontSize: '14px', fontWeight: 600 }}
                  >
                    <option value="en">{t('langs.english')}</option>
                    <option value="fr">{t('langs.french')}</option>
                  </Select>
                </Flex>
              </VStack>
            </Box>
          </Box>
        </Box>

        <Box px="12px">
          <Text fontSize="12px">This website is a fansite and is not affiliated with or endorsed by miHoYo.</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Menu
