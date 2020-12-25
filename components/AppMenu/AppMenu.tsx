import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/close-button'
import Language from './Language'
import ProfileMenu from './ProfileMenu'
import DashBox from '../DashBox'
import Dash from '../../pages'

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
        pt="60px"
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
              {t('site.navigations.characters')}
            </Text>
            <VStack width="100%" align="stretch">
              <NavButton
                href="/"
                onClick={(e) => handleNavigation(e, '/')}
                label={t('site.navigations.talent_level_up_material')}
                isCurrent={router.pathname === '/'}
              />
              <NavButton
                href="/character-ascension-materials"
                onClick={(e) => handleNavigation(e, '/character-ascension-materials')}
                label={t('site.navigations.character_ascension_materials')}
                isCurrent={router.pathname === '/character-ascension-materials'}
              />
              <NavButton
                href="/characters"
                onClick={(e) => handleNavigation(e, '/characters')}
                label={t('site.navigations.characters_list')}
                isCurrent={router.pathname.split('/')[1] === 'characters'}
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
              {t('site.navigations.weapons')}
            </Text>
            <VStack width="100%" align="stretch">
              <NavButton
                href="/weapon-level-up-materials"
                onClick={(e) => handleNavigation(e, '/weapon-level-up-materials')}
                label={t('site.navigations.weapon_level_up_material')}
                isCurrent={router.pathname === '/weapon-level-up-materials'}
              />
            </VStack>
          </Box>
        </Box>

        <SimpleGrid columns={1} spacing={2}>
          <Box>
            <VStack width="100%" align="stretch">
              <ProfileMenu onEditProfile={onEditProfile} />
              <Language />
            </VStack>
          </Box>
          <DashBox size="sm"  br="sm" variant="purple">
            <Box
              as="a"
              target="_blank"
              fontSize="12px"
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=LK7MGV4ZXRASW&item_name=We+rely+on+donations+to+maintain+the+website+and+make+more+wishes.+Thank+you+so+much+for+your+generosity%21&currency_code=EUR"
            >
              <Text fontSize="12px">
                {t('site.donate_description')}
              </Text>
              <Box w="100%" pt={2}>
                <Button w="100%" height="48px" borderRadius="12px" bg="white" color="#5F75EE" _hover={{ bg: 'white', color: '#6C5DD3' }}>{t('site.donate')}</Button>
              </Box>
            </Box>
          </DashBox>
          <Box px="12px">
            <Text fontSize="12px">{t('site.mihoyo')} <Text as="a" textDecoration="underline" href="https://twitter.com/vdesdoigts" target="_blank">{t('site.contact')}</Text></Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default Menu
