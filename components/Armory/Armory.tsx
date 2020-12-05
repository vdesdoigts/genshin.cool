import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FiSettings } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import useRematchDispatch from '../../hooks/useRematch'
import { ProfileSelectors } from '../../redux/selectors'
import { getWeaponById } from '../../api'
import { IArmory, IWeapon } from '../../types'
import WeaponsMenu from '../WeaponsMenu'

interface IProps {
  weapon?: IWeapon
  isDisabled?: boolean
  onDisabled?: () => void
  onEdit?: () => void
}

const Weapon = ({ weapon, isDisabled, onDisabled }: IProps) => {
  const { t } = useTranslation()

  return (
    <Box
      role="group"
      overflow="hidden"
      position="relative"
      borderRadius="0.875rem"
      boxShadow="rgba(236, 240, 250, .4) 0px 1px 1px, rgba(236, 240, 250, 0.4) 0px 2px 2px, rgba(236, 240, 250, 1) 0px 4px 4px, rgba(236, 240, 250, .4) 0px 8px 8px, rgba(236, 240, 250, .4) 0px 16px 16px"
      background="#fff"
      _before={{
        content: "''",
        position: "absolute",
        zIndex: 2,
        top: 0,
        left: 0,
        display: "block",
        width: "4px",
        height: "100%",
        background: 'transparent',
      }}
    >
      <Stack direction="row" spacing="0" align="center" justify="space-between">
        <Box
          flex="1 1 100%"
          pl="12px"
          py="12px"
        >
          <Stack direction="row" spacing="16px">
            <Box position="relative" overflow="hidden" flex="0 0 40px" width="40px" height="40px" borderRadius=".5rem" background="#f2f4f8">
              <Box position="relative" width="100%" height="100%">
                <Image
                  src={weapon.images.image}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Stack spacing={1} justify="center">
              <Text
                color="#4b4d55"
                fontFamily="heading"
                fontSize="1rem"
                fontWeight="semibold"
                lineHeight="1"
              >
                {t(`weapons.${weapon.name}`)}
              </Text>
            </Stack>
          </Stack>
        </Box>
        <Flex align="center" justify="center" p={4} pr="1.25rem">
          <Checkbox isChecked={!isDisabled} onChange={(e) => { e.preventDefault(); onDisabled() }} />
        </Flex>
      </Stack>
    </Box>
  )
}

const Armory = () => {
  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const currentArmory: IArmory = useSelector(ProfileSelectors.getCurrentArmory)
  const { isOpen: isSelectWeaponDrawerOpen, onOpen: onSelectWeaponDrawerOpen, onClose: onSelectWeaponDrawerClose } = useDisclosure()

  const onDisabledWeapon = (index: number) => {
    dispatch.profile.toggleArmory(index)
  }

  return (
    <Box>
      <HStack width="100%" align="center" justify="space-between" mb="16px">
        <Heading
          fontSize="18px"
          fontWeight="500"
          lineHeight="1.33333"
        >
          {t('site.your_armory')}
        </Heading>
        <Button
          position="relative"
          width="48px"
          height="48px"
          background="none"
          borderRadius="50%"
          fontSize="0"
          transition="all .25s"
          onClick={onSelectWeaponDrawerOpen}
          cursor="pointer"
          _hover={{
            boxShadow: '0 5px 10px rgba(227, 230, 236, 0.6)',
          }}
        >
          <Icon as={FiSettings} w={6} h={6} />
        </Button>
      </HStack>
      {currentArmory.length > 0
        ? (
          <SimpleGrid columns={1} spacing="0.75rem">
            {currentArmory.map((armory, index) => {
              const weapon = getWeaponById(armory.weapon.id)

              if (!weapon) {
                return null
              }
              
              return (
                <Weapon
                  key={armory.weapon.id}
                  weapon={weapon}
                  isDisabled={armory.isDisabled}
                  onDisabled={() => onDisabledWeapon(index)}
                />
              )
            })}
          </SimpleGrid>
        )
        : (
          <Box>
            {t('site.armory_empty')}
          </Box>
        )
      }
      <Drawer
        isOpen={isSelectWeaponDrawerOpen}
        onClose={onSelectWeaponDrawerClose}
        size="md"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
              <DrawerBody>
                <WeaponsMenu />
              </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}

export default Armory
