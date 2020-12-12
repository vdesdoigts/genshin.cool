import anemoHypostasis from '../../bosses/anemo-hypostasis'

export default {
  type: "boss_reward",
  name: "hurricane_seed",
  images: {
    image: "/images/ascensionmaterials/hurricane-seed.png"
  },
  droppedBy: [
    {
      ...anemoHypostasis,
      level: "+30",
    },
  ],
}
