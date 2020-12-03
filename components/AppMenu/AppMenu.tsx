import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Flex,
  Icon,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { CloseButton } from '@chakra-ui/close-button'
import { FiSettings } from 'react-icons/fi'
import { MdBookmarkBorder, MdLanguage, MdPeople } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { ILangs } from '../../types'
import useRematchDispatch from '../../hooks/useRematch'
import { OptionsSelectors, ProfileSelectors } from '../../redux/selectors'
import Language from './Language'
import ProfileMenu from './ProfileMenu'

interface INavButtonProps {
  href: string
  label: string
  isCurrent?: boolean
  onClick?: (e: any) => void
}

export const NavButton = ({ href, label, isCurrent, onClick }: INavButtonProps) => (
  <Flex
    as="a"
    href={href}
    alignItems="center"
    justify="space-between"
    height="56px"
    padding="0 20px"
    borderRadius="12px"
    background={isCurrent ? '#6C5DD3' : '#f2f2f2'}
    fontSize="14px"
    fontWeight="600"
    color={isCurrent ? '#fff' : '#11142D'}
    transition="all .25s"
    _active={{
      background: '#6C5DD3',
      color: '#ffffff',
    }}
    _hover={{
      background: isCurrent ? '#6C5DD3' : '#e8e8e8',
    }}
    onClick={onClick}
    {...(!isCurrent ? { cursor: 'pointer' } : { cursor: 'initial' })}
  >
    {label}
  </Flex>
)

interface IProps {
  onEditProfile: (index: number) => void
  isMenuOpen: boolean
  onMenuClose: () => void
  onMenuToggle: () => void
}

const Menu = ({ onEditProfile, onMenuClose }: IProps) => {
  const { i18n, t } = useTranslation()
  const router = useRouter()
  const dispatch = useRematchDispatch()
  const currentLang = useSelector(OptionsSelectors.getCurrentLang)

  const onChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch.options.setLang(e.target.value as ILangs)
    i18n.changeLanguage(e.target.value as ILangs)
  }

  const handleNavigation = (e, href) => {
    e.preventDefault()
    router.push(href)
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
              {t('site.navigation')}
            </Text>
            <VStack width="100%" align="stretch">
              <NavButton
                href="/"
                onClick={(e) => handleNavigation(e, '/')}
                label={t('site.navigations.overview')}
                isCurrent={router.pathname === '/'}
              />
              <NavButton
                href="/roster"
                onClick={(e) => handleNavigation(e, '/roster')}
                label={t('site.navigations.roster')}
                isCurrent={router.pathname === '/roster'}
              />
            </VStack>
          </Box>
        </Box>

        <Box>
          <Box mb="20px">
            <VStack width="100%" align="stretch">
              <ProfileMenu onEditProfile={onEditProfile} />
              <Language />
            </VStack>
          </Box>
          <Box px="12px">
            <Text fontSize="12px">This website is a fansite and is not affiliated with or endorsed by miHoYo.</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Menu
