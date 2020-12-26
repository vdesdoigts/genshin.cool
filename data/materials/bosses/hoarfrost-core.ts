import cryoRegisvine from '../../bosses/cryo-regisvine'

export default {
  type: "boss_reward",
  name: "hoarfrost_core",
  images: {
    image: "/images/ascensionmaterials/hoarfrost-core.png"
  },
  droppedBy: [
    {
      ...cryoRegisvine,
      level: 30,
    },
  ],
}
