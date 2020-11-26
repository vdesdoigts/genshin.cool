import React from 'react'
import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'

const NavButton = ({ label, isCurrent, onClick, onEdit, ...rest }: { label: string, isCurrent?: boolean, onClick?: () => void, onEdit?: () => void, as?: any, href?: string }) => (
  <Flex
    alignItems="center"
    height="56px"
    padding="0 20px"
    borderRadius="12px"
    background={isCurrent ? '#6C5DD3' : 'transparent'}
    fontSize="14px"
    fontWeight="600"
    color={isCurrent ? '#fff' : '#808191'}
    transition="all .25s"
    _hover={{
      color: isCurrent ? '#fff': '#6C5DD3',
    }}
    _active={{
      background: '#6C5DD3',
      color: '#ffffff',
    }}
    {...(!!onClick ? { onClick, cursor: 'pointer' } : { })}
  >
    <Text fontSize="inherit" fontWeight="inherit">{label}</Text>
    {!!onEdit && <Text onClick={(e) => { e.stopPropagation(); onEdit() }}>Edit</Text>}
  </Flex>
)

const Menu = () => {
  const dispatch = useRematchDispatch()
  const userRosterNames = useSelector(ProfileSelectors.getUserRosterNames)
  const currentUserProfileIndex = useSelector(ProfileSelectors.getCurrentUserProfileIndex)

  const onSelectProfile = (index: number) => {
    dispatch.profile.setCurrentProfile(index)
  }

  const onAddProfile = () => {
    dispatch.profile.addProfile()
  }

  return (
    <Box
      height="100%"
      padding="0 20px 30px"
      overflowY="auto"
    >
      <Flex
        minH="100%"
        justify="space-between"
        direction="column"
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
                Profiles
              </Text>
              <VStack width="100%" spacing={0} align="stretch">
                {userRosterNames.map((name, index) => (
                  <NavButton
                    key={index}
                    onClick={() => onSelectProfile(index)}
                    label={name}
                    isCurrent={index === currentUserProfileIndex}
                    // onEdit={() => onEditProfile(index)}
                  />
                ))}
                <NavButton
                  onClick={onAddProfile}
                  label="Add a profile"
                />
              </VStack>
            </Box>

            {/* <Box
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
                Tools
              </Text>
            </Box> */}
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
