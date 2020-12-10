import React from 'react'
import ascensions from '../datas/characters-ascensions'
import api from '../datas/api'

const Roster = () => {
  const amber = api.getCharacterById(1, {
    withAscension: true,
  })

  return (
    <>
      <p>{amber.name}</p>
      {ascensions.map((ascension, ascensionsIndex) => (
        <div key={ascensionsIndex}>
          <p>{ascension.rank}</p>
          <p>{ascension.level}</p>
          <p>{ascension.cost}</p>
          {ascension.count.map((count, index) => (
            <ul>
              <li>{amber.ascension[ascensionsIndex][index].name} {count}</li>
            </ul>
          ))}
        </div>
      ))}
    </>
  )
}

export default Roster
