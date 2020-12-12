import oceanid from '../../bosses/oceanid'

export default {
  type: "boss_reward",
  name: "cleansing_heart",
  images: {
    image: "/images/ascensionmaterials/cleansing-heart.png"
  },
  droppedBy: [
    {
      ...oceanid,
      level: "30+",
    },
  ],
}
