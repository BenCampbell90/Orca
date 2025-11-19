export const cardVariants = {
	hidden: {
		opacity: 1,
		scale: 1,
	},
	visible: {
		opacity: 1,
		scale: [1, 1.35, 1],
		transition: {
			duration: 0.35,
			ease: [0.34, 1.56, 0.64, 1] as const,
		},
	},
}

export const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
		},
	},
}

