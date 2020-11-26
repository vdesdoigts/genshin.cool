import React from 'react'
import {
  Box,
  Text,
} from '@chakra-ui/react'
import ReactSelect, { Props } from 'react-select'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: state.isSelected ? '#6C5DD3' : '#11142D', // state.isSelected ? 'red' : 'blue',
    padding: '8px 16px',
    background: state.isSelected ? '#E2E8F0' : '#FFF',
    '&:hover': { color: '#6C5DD3' },
  }),
  control: (provided) => ({
    ...provided,
    minHeight: '44px',
    borderColor: 'transparent',
    borderRadius: '8px',
    color: '#11142D',
    fontFamily: 'Poppins, Georgia, serif',
    fontSize: '16px',

    '&:focus, &:hover': {
      borderColor: 'transparent',
    },
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
  },
  indicatorSeparator: () => ({
    borderColor: '#fff'
  }),
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
