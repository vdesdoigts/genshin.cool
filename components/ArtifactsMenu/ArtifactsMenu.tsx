import React, { useState } from 'react'

export default () => <div></div>
// import {
//   Box,
//   Input,
//   SimpleGrid,
//   Text,
// } from '@chakra-ui/react'
// import { useSelector } from 'react-redux'
// import { RosterSelectors } from '../../redux/selectors'
// import { ICharacter, IArtifact, IArtifactItem, IArtifactType } from '../../types'
// import { getArtifacts } from '../../pages/api'
// import ListItem from '../ListItem'
// import Title from '../Title'

// interface IProps {
//   character?: ICharacter
//   onSelect: (characterName: ICharacter['name'], artifact: IArtifactItem['name'], type: IArtifactType) => void
// }

// const ArtifactsMenu = ({ character, onSelect }: IProps) => {
//   if (!character) {
//     return null
//   }

//   const artifacts = getArtifacts()
//   const userRosterArtifactsCharacter = useSelector((state) => RosterSelectors.selectArtifactsCharacter(state, character.name))

//   const [value, setValue] = useState('')
//   const artifactsList = {
//     flower: [],
//     plume: [],
//     sands: [],
//     goblet: [],
//     circlet: [],
//   }

//   artifacts.forEach((artifact) => {
//     artifact.flower && artifactsList.flower.push(artifact.flower)
//     artifact.plume && artifactsList.plume.push(artifact.plume)
//     artifact.sands && artifactsList.sands.push(artifact.sands)
//     artifact.goblet && artifactsList.goblet.push(artifact.goblet)
//     artifact.circlet && artifactsList.circlet.push(artifact.circlet)
//   })

//   const handleChange = (event) => {
//     setValue(event.target.value)
//   }

//   return (
//     <Box pt={4}>
//       <Title label={`Select ${character.name}'s artifacts`} />
//       <Box pt={2}>
//         <Input
//           value={value}
//           onChange={handleChange}
//           placeholder="Search artifacts by name"
//           size="lg"
//         />
//       </Box>
//       <Box pt={4}>
//         {Object.keys(artifactsList).map((key: IArtifactType, index) => (
//           <Box key={index} pb={8}>
//             {/* <Text
//               pb={2}
//               fontFamily="heading"
//               fontSize="1.125rem"
//               fontWeight="medium"
//             >
//               {key}
//             </Text> */}
//             <SimpleGrid spacing={3}>
//               {artifactsList[key].filter((artifact) => artifact.name.toUpperCase().indexOf(value.toUpperCase()) > -1).map((item, index) => (
//                 <ListItem
//                   key={index}
//                   image={item.images.image}
//                   label={item.name}
//                   onSelect={() => onSelect(character.name, item.name, key)}
//                   isSelected={userRosterArtifactsCharacter[key]?.name === item.name}
//                   ratio={36/39}
//                 />
//               ))}
//             </SimpleGrid>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   )
// }

// export default ArtifactsMenu
