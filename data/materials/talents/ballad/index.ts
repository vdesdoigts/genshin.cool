import guideBallad from './guide-ballad'
import philosophiesBallad from './philosophies-ballad'
import teachingsBallad from './teachings-ballad'

export default {
	name: "ballad",
	items: [
		teachingsBallad,
		guideBallad,
		philosophiesBallad,
	],
	day: ["wednesday", "saturday", "sunday"],
	location: "springvale",
	region: "mondstadt",
	domainOfMastery: "forsaken_rift",
	images: {
		image: "/images/talentmaterials/ballad-teachings.png"
	}
}
