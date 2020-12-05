import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FiSettings } from 'react-icons/fi'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'

interface IButtonProps {
  onClick?: (e: any) => void
  onEdit?: () => void
  label: string
  isCurrent?: boolean
}

const Button = ({ onClick, onEdit, label, isCurrent }: IButtonProps) => (
  <Flex
    display="flex"
    alignItems="center"
    height="56px"
    padding="0 20px"
    borderRadius="12px"
    fontSize="14px"
    fontWeight="600"
    color={isCurrent ? '#6C5DD3': '#808191'}
    background="#ffffff"
    boxShadow="0px 6px 8px rgba(0, 0, 0, 0.04)"
    transition="all .25s"
    {...(!!onClick && !isCurrent ? { onClick, cursor: 'pointer' } : { })}
  >
    <Flex
      align="center"
      flex="1 1 100%"
      height="100%"
      _hover={{
        color: '#6C5DD3',
      }}
    >
      <Text>{label}</Text>
    </Flex>
    {!!onEdit && (
      <Box
        p={1}
        cursor="pointer"
        color="#808191"
        fontSize={0}
        transition="all .25s"
        _hover={{
          transform: 'rotate(50deg)',
          color: '#6C5DD3',
        }}
        onClick={(e) => {
          e.stopPropagation();
          onEdit()
        }}>
          <Icon as={FiSettings} w={4} h={4} />
        </Box>
      )}
  </Flex>
)

interface IProps {
  onEditProfile: (index: number) => void
}

const ProfileMenu = ({ onEditProfile }: IProps) => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const userRosterNames = useSelector(ProfileSelectors.getUserRosterNames)
  const currentUserProfileIndex = useSelector(ProfileSelectors.getCurrentUserProfileIndex)
  const { isOpen, onClose, onToggle } = useDisclosure()

  const onSelectProfile = (index: number) => {
    dispatch.profile.setCurrentProfile(index)
    onClose()
  }

  const onAddProfile = () => {
    dispatch.profile.addProfile()
    onClose()
  }

  return (
    <>
      {isOpen && (
        <Stack
          position="relative"
          padding="20px 10px 33px"
          marginBottom="-15px"
          background="#F7F7F7"
          borderRadius="12px"
          transition="padding .25s, background .25s"
        >
          {userRosterNames.filter((name) => name !== currentUserProfileIndex).map((name, index) => (
            <Button
              key={index}
              onClick={() => onSelectProfile(index)}
              onEdit={() => onEditProfile(index)}
              label={name}
              isCurrent={index === currentUserProfileIndex}
            />
          ))}
          <Button
            onClick={onAddProfile}
            label={t('site.add_a_profile')}
          />
        </Stack>
      )}

      <Flex
        position="relative"
        zIndex={2}
        alignItems="center"
        padding="0 20px"
        height="62px"
        borderRadius="12px"
        background={isOpen ? '#3F8CFF' : '#f7f7f7'}
        color={isOpen ? '#fff' : '#11142D'}
        cursor="pointer"
        transition="background .25s"
        _hover={{
          background: '#3F8CFF',
          color: '#fff',
        }}
        onClick={onToggle}
      >
        <Box
          overflow="hidden"
          position="relative"
          flexShrink={0}
          width="40px"
          height="40px"
          borderRadius="50%"
          background="#f2f4f8"
          fontSize={0}
        >
          <Image src="/images/characters/razor-thumb.png" layout="fill" objectFit="contain" />
        </Box>
        <Box
          flex="0 0 calc(100% - 64px)"
          width="calc(100% - 64px)"
          padding="0 5px 0 16px"
        >
          <Text
            noOfLines={1}
            fontSize="14px"
            lineHeight="1.42857"
            fontWeight={600}
          >
            {userRosterNames[currentUserProfileIndex]}
          </Text>
        </Box>
        <Flex
          direction="column"
          flexShrink={0}
          justifyContent="center"
          alignItems="center"
          width="24px"
          height="24px"
          fontSize={0}
        >
          <Icon as={MdKeyboardArrowUp} w={5} h={5} />
          <Icon as={MdKeyboardArrowDown} w={5} h={5} mt="-8px" />
        </Flex>
      </Flex>
    </>
  )
}

export default ProfileMenu
