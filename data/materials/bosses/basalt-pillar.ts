import geoHypostasis from '../../bosses/geo-hypostasis'

export default {
  type: "boss_reward",
  name: "basalt_pillar",
  images: {
    image: "/images/ascensionmaterials/basalt-pillar.png"
  },
  droppedBy: [
    {
      ...geoHypostasis,
      level: 30,
    },
  ],
}
