import React, { useState } from 'react'
import {
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

  const dispatch = useRematchDispatch()
  const userRosterNames = useSelector(ProfileSelectors.getUserRosterNames)

  const [value, setValue] = useState(userRosterNames[profileBeingEdited])
  const handleChange = (event) => setValue(event.target.value)

  const onEdit = () => {
    dispatch.profile.updateProfileName({ index: profileBeingEdited, name: value })
    onModalClose()
  }

  return (
    <Modal isOpen={isModalOpen} onClose={onModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Name"
            size="lg"
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onEdit}>
            Save
          </Button>
          <Button variant="ghost" onClick={onModalClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditProfile
