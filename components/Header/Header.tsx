import React from 'react'
import {
  Box,
  Container,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  VStack,
} from '@chakra-ui/react'
import {
  ChevronDownIcon,
} from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'
import { NavButton } from '../AppMenu/AppMenu'

interface IProps {
  onEditProfile: (index: number) => void
  isMenuOpen: boolean
  onMenuClose: () => void
  onMenuToggle: () => void
}

const Header = ({ onEditProfile, isMenuOpen, onMenuClose, onMenuToggle }: IProps) => {
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
                        label="Add a profile"
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
