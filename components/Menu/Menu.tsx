import React from 'react'
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Menu as ChackraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RosterSelectors } from '../../redux/selectors'

const menus = [
  {
    id: 'roster',
    label: 'Your roster'
  },
  {
    id: 'schedule',
    label: 'Schedule'
  }
]

const NavButton = ({ label, isCurrent, onClick, onEdit, ...rest }: { label: string, isCurrent?: boolean, onClick?: () => void, onEdit?: () => void, as?: any, href?: string }) => (
  <HStack
    {...rest}
    px={6}
    py={4}
    justify="space-between"
    borderRadius=".5rem"
    bg={!isCurrent ? '#fff' : '#9288e2'}
    color={!isCurrent ? '#757685' : '#fff'}
    textAlign="left"
    transition="all .2s ease"
    cursor="pointer"
    _hover={{
      color: !isCurrent ? '#9288e2' : '#fff',
    }}
    _active={{
      bg: "#9288e2",
      color: '#fff'
    }}
    {...(!!onClick ? { onClick } : {})}
  >
    <Text fontWeight="normal">{label}</Text>
    {!!onEdit && <Text onClick={(e) => { e.stopPropagation(); onEdit() }}>Edit</Text>}
  </HStack>
)

interface IProps {
  onSelectRoster: (index: number) => void
  onAddRoster: () => void
  currentNavigation: 'roster' | 'schedule'
  onEditProfile: (index: number) => void
}

const Menu = ({
  onSelectRoster,
  onAddRoster,
  currentNavigation,
  onEditProfile,
}: IProps) => {
  const userRosterNames = useSelector(RosterSelectors.getUserRosterNames)
  const currentRosterIndex = useSelector(RosterSelectors.getCurrentRosterIndex)

  return (
    <Flex
      overflowY="auto"
      position="fixed"
      top={0}
      left={0}
      width={{ base: '100%', lg: '240px', xl: '300px' }}
      maxH="100vh"
      direction="column"
      justify="space-between"
      background="#fff"
    >
      <Box px={8}>
        <Box pt={10}>
          <Heading size="lg" fontWeight="medium">Dash.</Heading>
        </Box>

        <Box pt={10}>
          <Text
            color="#acacac"
            fontFamily="heading"
            fontSize="1rem"
          >
            Profiles
          </Text>
          <VStack width="100%" align="stretch" pt={2}>
            {userRosterNames.map((name, index) => (
              <NavButton
                key={index}
                onClick={() => onSelectRoster(index)}
                label={name}
                isCurrent={index === currentRosterIndex}
                onEdit={() => onEditProfile(index)}
              />
            ))}
            <NavButton
              onClick={onAddRoster}
              label="Add a profile"
            />
            <Box pt={4} px={4}>
              <Divider />
            </Box>
          </VStack>
        </Box>

        <Box pt={10}>
          <Text
            color="#acacac"
            fontFamily="heading"
            fontSize="1rem"
          >
            Navigation
          </Text>
          <VStack width="100%" align="stretch" pt={2}>
            {menus.map((menu, index) => (
              <NavButton
                key={index}
                as="a"
                href={`#${menu.id}`}
                label={menu.label}
                isCurrent={currentNavigation === menu.id}
              />
            ))}
            <Box pt={4} px={4}>
              <Divider />
            </Box>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}

export default Menu
