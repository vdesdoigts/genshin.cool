import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'

const NavButton = ({ label, isCurrent, onClick, onEdit, ...rest }: { label: string, isCurrent?: boolean, onClick?: () => void, onEdit?: () => void, as?: any, href?: string }) => (
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

const Header = ({ onEditProfile, isMenuOpen, onMenuClose, onMenuToggle }: IProps) => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const userRosterNames = useSelector(ProfileSelectors.getUserRosterNames)
  const currentUserProfileIndex = useSelector(ProfileSelectors.getCurrentUserProfileIndex)
  const currentUserProfileName = useSelector(ProfileSelectors.getCurrentUserProfileName)

  const onAddProfile = () => {
    dispatch.profile.addProfile()
  }

  const onSelectProfile = (index: number) => {
    dispatch.profile.setCurrentProfile(index)
  }

  return (
    <>
      <Flex
        display={{ base: 'flex', xxl: 'none' }}
        position="sticky"
        top={0}
        zIndex={90}
        align="center"
        height="70px"
        maxWidth="calc(100% + 32px)"
        borderBottom="1px solid #E4E4E4"
        background="#fff"
      >
        <Box width="100%" maxW={{ base: '600px', md: '1000px', xl: '1400px' }} margin="0 auto">
          <Stack
            maxW="100%"
            px={{ base: '20px', md: '64px', xl: '32px', xxl: '64px' }}
            direction="row"
            justify="space-between"
          >
            <Box
              onClick={onMenuToggle}
              as="button"
              display="inline-block"
              width="32px"
              height="40px"
              mr="auto"
              color={isMenuOpen ? '#6C5DD3' : '#1B1D21' }
              fontSize={0}
              outline={0}
              _before={{
                content: '""',
                display: 'inline-block',
                width: '32px',
                height: '2px',
                margin: '3px auto',
                borderRadius: '1px',
                background: 'currentColor',
              }}
              _after={{
                content: '""',
                display: 'inline-block',
                width: '32px',
                height: '2px',
                margin: '3px auto',
                borderRadius: '1px',
                background: 'currentColor',
              }}
            />
            <Menu placement="top-end">
              {({ onClose }) => (
                <>
                  <MenuButton
                    px="24px"
                    py="10px"
                    transition="all 0.2s"
                    borderRadius="12px"
                    borderWidth="1px"
                    borderColor="#6C5DD3"
                    _hover={{ bg: 'gray.100' }}
                    _expanded={{ bg: '#6C5DD3', color: '#fff' }}
                    _focus={{ outline: 0 }}
                  >
                    {currentUserProfileName} <ChevronDownIcon />
                  </MenuButton>
                  <MenuList maxW="300px" px="12px">
                    <VStack width="100%" spacing={0} align="stretch">
                      {userRosterNames.map((name, index) => (
                        <NavButton
                          key={index}
                          onClick={() => { onSelectProfile(index), onClose() }}
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
                  </MenuList>
                </>
              )}
            </Menu>
          </Stack>
        </Box>
      </Flex>
    </>
  )
}

export default Header
