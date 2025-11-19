export const cardVariants = {
	hidden: (angle: number) => {
		const distance = 500
		const radians = (angle * Math.PI) / 180
		return {
			opacity: 0,
			x: Math.cos(radians) * distance,
			y: Math.sin(radians) * distance,
		}
	},
	visible: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.4, 0, 0.2, 1] as const,
		},
	},
}

export const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
}

