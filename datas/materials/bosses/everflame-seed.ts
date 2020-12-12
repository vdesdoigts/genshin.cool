import pyroRegisvine from '../../bosses/pyro-regisvine'

export default {
  type: "boss_reward",
  name: "everflame_seed",
  images: {
    image: "/images/ascensionmaterials/everflame-seed.png"
  },
  droppedBy: [
    {
      ...pyroRegisvine,
      level: "30+",
    },
  ],
}
