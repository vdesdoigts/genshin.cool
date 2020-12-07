import React from 'react'
import {
  Box,
  Grid,
  SimpleGrid,
  AspectRatio,
} from '@chakra-ui/react'
import Image from 'next/image'
import { getCharacterById } from '../../api'
import { IRoster, IRosterCharacter } from '../../types'
import DashBox from '../DashBox'
import CharacterItem from '../CharacterItem'

interface IProps {
  currentRoster: IRoster
  selectedCharacter: IRosterCharacter['character']
  setSelectedCharacter: (index: number) => void
}

const RosterManagement = ({ currentRoster, selectedCharacter, setSelectedCharacter }: IProps) => {
  return (
    <>
      <Box>
        {currentRoster.length > 0
          ? (
            <>
              <Box display={{ base: 'block', xl: 'none' }}>
                <Grid templateColumns="repeat(auto-fill, minmax(90px, 1fr) )" spacing={2}>
                  {currentRoster.map((roster, index) => {
                    const character = getCharacterById(roster.character.id)
                    const isSelected = selectedCharacter.id === roster.character.id
                    
                    return (
                      <DashBox
                        key={roster.character.id}
                        onClick={() => setSelectedCharacter(index)}
                        variant={isSelected ? 'purple' : null}
                        br="sm"
                        size="xs"
                        _hover={!isSelected ? { cursor: 'pointer', bg: 'rgba(228, 228, 228, 0.3)' } : {}}
                      >
                        <AspectRatio
                          ratio={1}
                          width="100%"
                          borderRadius=".5rem"
                          background="#f2f4f8"
                          fontSize="0"
                        >
                          <Image
                            src={character.images.image}
                            layout="fill" 
                            objectFit="contain"
                          />
                        </AspectRatio>
                      </DashBox>
                    )
                  })}
                </Grid>
              </Box>
              <SimpleGrid spacing={2}>
                {currentRoster.map((roster, index) => {
                  const character = getCharacterById(roster.character.id)
                  const isSelected = selectedCharacter.id === roster.character.id
                  
                  return (
                    <Box
                      key={roster.character.id}
                      onClick={() => setSelectedCharacter(index)}
                      display={{ base: isSelected ? 'block' : 'none', xl: 'block' }}
                      cursor="pointer"
                    >
                      <CharacterItem
                        character={character}
                        ascension={roster.character.ascension}
                        isSelected={isSelected}
                        shadow
                        hover
                        selectPosition="ascension"
                      />
                    </Box>
                  )
                })}
              </SimpleGrid>
            </>
          )
          : (
            <div></div>
          )
        }
      </Box>
    </>
  )
}

export default RosterManagement
