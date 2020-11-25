import React from 'react'
import {
  Box,
  Container,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
} from '@chakra-ui/react'
import {
  ChevronDownIcon,
} from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'

const Header = () => {
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
    <Container maxW="container">
      <Stack isInline justify="flex-end">
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "gray.100" }}
            _expanded={{ bg: "red.200" }}
            _focus={{ outline: 0, boxShadow: "outline" }}
          >
            {currentUserProfileName} <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            {userRosterNames.map((name, index) => {
              if (currentUserProfileIndex !== index) {
                return (
                  <MenuItem key={index} onClick={() => onSelectProfile(index)}>{name}</MenuItem>
                )
              }
            })}
            <MenuDivider />
            <MenuItem onClick={onAddProfile}>Add a profile</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Container>
  )
}

export default Header
