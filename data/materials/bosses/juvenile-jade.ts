import primoGeovishap from '../../bosses/primo-geovishap'

export default {
  type: "boss_reward",
  name: "juvenile_jade",
  images: {
    image: "/images/ascensionmaterials/juvenile-jade.png"
  },
  droppedBy: [
    {
      ...primoGeovishap,
      level: 30,
    },
  ],
}
