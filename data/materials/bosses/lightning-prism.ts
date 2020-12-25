import electroHypostasis from '../../bosses/electro-hypostasis'

export default {
  type: "boss_reward",
  name: "lightning_prism",
  images: {
    image: "/images/ascensionmaterials/lightning-prism.png"
  },
  droppedBy: [
    {
      ...electroHypostasis,
      level: 30,
    },
  ],
}
