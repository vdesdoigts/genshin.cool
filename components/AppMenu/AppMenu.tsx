import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/close-button'
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
  const { t } = useTranslation()
  const router = useRouter()

  const handleNavigation = (e, href) => {
    e.preventDefault()
    router.push(href)
    onMenuClose()
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
        pt="140px"
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
          <Box px="12px" mb="20px">
            <Text fontSize="12px">{t('site.mihoyo')}</Text>
          </Box>
          <Box px="12px">
            <Text fontSize="12px"><a href="https://twitter.com/vdesdoigts" target="_blank">Contact: @vdesdoigts</a></Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Menu
