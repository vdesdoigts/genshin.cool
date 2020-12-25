import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ProfileSelectors } from '../../redux/selectors'
import useRematchDispatch from '../../hooks/useRematch'

interface IProps {
  profileBeingEdited: number
  isModalOpen: boolean
  onModalClose: () => void
}

const EditProfile = ({ profileBeingEdited, isModalOpen, onModalClose }: IProps) => {

  if (typeof profileBeingEdited !== 'number') {
    return null
  }

  const { t } = useTranslation()
  const dispatch = useRematchDispatch()
  const userRosterNames = useSelector(ProfileSelectors.getUserRosterNames)

  const [value, setValue] = useState(userRosterNames[profileBeingEdited])
  const handleChange = (event) => setValue(event.target.value)

  const onEdit = () => {
    if (value !== null && value !== '') {
      dispatch.profile.updateProfileName({ index: profileBeingEdited, name: value })
      onModalClose()
    }
  }

  const onDeleteProfile = () => {
    dispatch.profile.deleteProfile(profileBeingEdited)
    onModalClose()
  }

  return (
    <Modal isOpen={isModalOpen} onClose={onModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('site.edit_profile_modal.title')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Name"
            size="lg"
          />
        </ModalBody>

        <ModalFooter justifyContent={userRosterNames.length > 1 ? 'space-between' : 'flex-end'}>
          {userRosterNames.length > 1 && <Button variant="outline" colorScheme="red" onClick={onDeleteProfile}>{t('site.delete')}</Button>}
          <Box>
            <Button colorScheme="blue" mr={3} onClick={onEdit} isDisabled={value === null && value === ''}>
              {t('site.save')}
            </Button>
            <Button variant="outline" onClick={onModalClose}>{t('site.cancel')}</Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditProfile
