import React from 'react'
import {
  Box,
  Text,
} from '@chakra-ui/react'
import ReactSelect, { Props } from 'react-select'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: (provided) => ({
    ...provided,
    minHeight: '44px',
    borderColor: '#E3E3E3',
    color: '#1B1D21',
    fontFamily: 'Poppins, Georgia, serif',
    fontSize: '16px',
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingLeft: '16px',
  }),
  placeholder: (provided) => ({
    ...provided,
    fontFamily: 'Poppins, Georgia, serif',
    fontSize: '16px',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

interface IProps {
  label?: string
}

const Select = ({ label, ...selectProps }: IProps & Props) => {
  return (
    <Box>
      {label && (
        <Text
          pb={1}
          fontFamily="heading"
          fontSize="18px"
          fontWeight="medium"
        >
          {label}
        </Text>
      )}
      <ReactSelect
        {...selectProps}
        styles={customStyles}
      />
    </Box>
  )
}

export default Select
