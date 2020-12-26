import guideFreedom from './guide-freedom'
import philosophiesFreedom from './philosophies-freedom'
import teachingsFreedom from './teachings-freedom'

export default {
	name: "freedom",
	items: [
		teachingsFreedom,
		guideFreedom,
		philosophiesFreedom,
	],
	day: ["monday", "thursday", "sunday"],
	location: "springvale",
	region: "mondstadt",
	domainOfMastery: "forsaken_rift",
	images: {
		image: "/images/talentmaterials/freedom-teachings.png"
	}
}
