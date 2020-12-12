import agnidusAgateChunk from '../materials/gems/agnidus-agate/agnidus-agate-chunk'
import agnidusAgateFragment from '../materials/gems/agnidus-agate/agnidus-agate-fragment'
import agnidusAgateGemstone from '../materials/gems/agnidus-agate/agnidus-agate-gemstone'
import agnidusAgateSliver from '../materials/gems/agnidus-agate/agnidus-agate-sliver'
import everflameSeed from '../materials/bosses/everflame-seed'

export default [
  [
    {
      ...agnidusAgateSliver,
      count: 1,
    },
  ],
  [
    {
      ...agnidusAgateFragment,
      count: 3,
    },
    {
      ...everflameSeed,
      count: 2,
    }
  ],
  [
    {
      ...agnidusAgateFragment,
      count: 6,
    },
    {
      ...everflameSeed,
      count: 4,
    }
  ],
  [
    {
      ...agnidusAgateChunk,
      count: 3,
    },
    {
      ...everflameSeed,
      count: 8,
    }
  ],
  [
    {
      ...agnidusAgateChunk,
      count: 6,
    },
    {
      ...everflameSeed,
      count: 12,
    }
  ],
  [
    {
      ...agnidusAgateGemstone,
      count: 6,
    },
    {
      ...everflameSeed,
      count: 20,
    }
  ]
]
